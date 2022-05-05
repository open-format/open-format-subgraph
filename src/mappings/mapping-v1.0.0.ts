// Contract V1.0.0 /abis/MusicFactory.json

import {
  JSONValue,
  JSONValueKind,
  store,
  Wrapped,
} from "@graphprotocol/graph-ts";
import {
  Attribute,
  Creator,
  Owner,
  OwnerToken,
  Payout,
  Property,
  SaleData,
  Stakeholder,
  Token,
} from "../../generated/schema";
import {
  MusicFactory as MusicFactoryContract,
  PayeeAdded as PayeeAddedEvent,
  PaymentReleased as PaymentReleasedEvent,
  ReleaseCreated as ReleaseCreatedEvent,
  ReleaseMinted as ReleaseMintedEvent,
  ReleaseSold as ReleaseSoldEvent,
} from "../../generated/TheFactory/MusicFactory";
import { getStringValue, parseJsonFromIpfs } from "../helpers/common";

export function handleReleaseCreated(
  event: ReleaseCreatedEvent
): void {
  let media = new Token(event.address.toHex());
  let saleData = new SaleData(event.address.toHex());

  /*
   * Handle Contract Data
   */
  media.symbol = event.params.symbol.toString();
  media.createdAt = event.block.timestamp;
  media.saleData = event.address.toHex();

  /*
   * Handle Sale Data
   */
  if (event.params.salePrice) {
    saleData.salePrice = event.params.salePrice;
    saleData.createdAt = event.block.timestamp;
    saleData.maxSupply = event.params.maxSupply;
    saleData.royaltiesPercentage = event.params.royaltiesPercentage;
  }

  const jsonData: Wrapped<JSONValue> | null = parseJsonFromIpfs(
    event.params.metadataURI_
  );

  if (jsonData != null) {
    let attributes = new Array<string>();
    let metadatas = new Array<string>();
    const parsedMetadata = jsonData.inner.toObject();

    if (getStringValue(parsedMetadata, "factory_id") != null) {
      media.factory_id =
        getStringValue(parsedMetadata, "factory_id") +
        event.address.toHex();
    }

    if (getStringValue(parsedMetadata, "factory_id") != null) {
      media.release_type = getStringValue(
        parsedMetadata,
        "release_type"
      );
    }
    /*
     * Handle Metadata
     */
    for (let i = 0; i < parsedMetadata.entries.length; i++) {
      const entry = parsedMetadata.entries[i];

      if (entry.key !== "attributes") {
        if (entry.value.kind == JSONValueKind.STRING) {
          let metadata = Property.load(
            entry.key + "-" + entry.value.toString()
          );

          if (!metadata) {
            metadata = new Property(
              entry.key + "-" + entry.value.toString()
            );
            metadata.key = entry.key;
            metadata.value = entry.value.toString();
          }
          metadata.save();
          metadatas.push(entry.key + "-" + entry.value.toString());
        }
      }
    }

    /*
     * Handle Attributes
     */

    let attributesJSON = parsedMetadata.get("attributes");

    if (attributesJSON) {
      let attrArr = attributesJSON.toArray();
      for (let i = 0; i < attrArr.length; i++) {
        const attrMap = attrArr[i].toObject();

        let attrName = "";
        let attrValue = "";

        if (attrMap.isSet("trait_type")) {
          attrName = attrMap.get("trait_type")!.toString();
          attrValue = attrMap.get("value")!.toString();

          let attribute = Attribute.load(
            event.address.toHex() + "-" + attrName + "-" + attrValue
          );

          if (!attribute) {
            attribute = new Attribute(
              event.address.toHex() + "-" + attrName + "-" + attrValue
            );
            attribute.trait_type = attrName;
            attribute.value = attrValue;
            attribute.save();
            attributes.push(attribute.id);
          }
        }
      }
    }
    media.properties = metadatas;
    media.attributes = attributes;
  }

  /*
   * Handle Creator
   */
  let creator = Creator.load(event.transaction.from.toHex());

  if (!creator) {
    creator = new Creator(event.transaction.from.toHex());
  }

  media.creator = creator.id;
  creator.save();
  media.save();
  saleData.save();
}

export function handlePayeeAdded(event: PayeeAddedEvent): void {
  let stakeholder = new Stakeholder(
    event.params.account.toHex() + "-" + event.address.toHex()
  );
  stakeholder.share = event.params.shares;
  stakeholder.token = event.address.toHex();
  stakeholder.save();
}

export function handleReleaseSold(event: ReleaseSoldEvent): void {
  let media = Token.load(event.address.toHex());
  let saleData = SaleData.load(event.address.toHex());
  let contract = MusicFactoryContract.bind(event.address);
  // get ownerRelease - Must exist to be able to sell
  let ownerMedia = OwnerToken.load(
    `${event.params.oldOwner.toHex()}-${event.address.toHex()}-${
      event.params.tokenId
    }`
  );
  // check for newOwner
  let newOwner = Owner.load(event.params.newOwner.toHex());

  if (media && saleData) {
    saleData.totalEarnings = contract
      .totalSupply()
      .times(event.params.salePrice);
    saleData.totalSold = contract.totalSupply();
    saleData.save();

    if (ownerMedia) {
      store.remove(
        "OwnerMediaItem",
        `${event.params.oldOwner.toHex()}-${event.address.toHex()}-${
          event.params.tokenId
        }`
      );

      let newOwnerMedia = new OwnerToken(
        `${event.params.newOwner.toHex()}-${event.address.toHex()}-${
          event.params.tokenId
        }`
      );

      newOwnerMedia.token = event.address.toHex();
      newOwnerMedia.owner = event.params.newOwner.toHex();
      newOwnerMedia.save();

      if (!newOwner) {
        newOwner = new Owner(event.params.newOwner.toHex());
        newOwner.save();
      }
    }
  }
}

export function handleReleaseMinted(event: ReleaseMintedEvent): void {
  let media = Token.load(event.address.toHex());
  let saleData = SaleData.load(event.address.toHex());
  let contract = MusicFactoryContract.bind(event.address);
  let ownerMedia = new OwnerToken(
    `${event.params.receiver.toHex()}-${event.address.toHex()}-${
      event.params.newTokenId
    }`
  );
  let owner = Owner.load(event.params.receiver.toHex());

  if (media && saleData) {
    saleData.totalEarnings = contract
      .totalSupply()
      .times(contract.releaseSalePrice());
    saleData.totalSold = contract.totalSupply();
    saleData.save();

    ownerMedia.token = event.address.toHex();
    ownerMedia.owner = event.params.receiver.toHex();
    ownerMedia.save();

    if (!owner) {
      owner = new Owner(event.params.receiver.toHex());
      owner.save();
    }
  }
}

export function handlePaymentReleased(
  event: PaymentReleasedEvent
): void {
  let media = Token.load(event.address.toHex());
  let saleData = SaleData.load(event.address.toHex());
  let contract = MusicFactoryContract.bind(event.address);
  let payout = new Payout(
    event.address.toHex() + "-" + event.params.to.toHex()
  );

  if (media && saleData) {
    payout.account = event.params.to.toHex();
    payout.amount = event.params.amount;
    payout.token = event.address.toHex();
    payout.createdAt = event.block.timestamp;
    payout.transactionHash = event.transaction.hash;
    payout.save();

    saleData.totalReleased = contract
      .totalReleased1()
      .plus(event.params.amount);
    saleData.save();
  }
}
