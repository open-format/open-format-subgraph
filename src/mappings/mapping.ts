// Contract V1.1.0 /abis/OpenFormat.json
import {
  JSONValue,
  JSONValueKind,
  store,
  Wrapped,
} from "@graphprotocol/graph-ts";
import {
  Approval,
  ApprovedDepositExtensionSet,
  CommissionPaid,
  Created,
  ERC20TokenBalanceWithdrawn,
  ERC20TotalDepositedAmountUpdated,
  MaxSupplySet,
  Minted,
  MintingPriceSet,
  OpenFormat,
  OwnershipTransferred,
  PausedStateSet,
  PaymentReceived,
  PrimaryCommissionSet,
  RoyaltiesSet,
  RoyaltyPaid,
  SalePriceSet,
  SecondaryCommissionSet,
  SharesAllocated,
  Sold,
  TokenBalanceWithdrawn,
  TotalDepositedAmountUpdated,
  Transfer,
} from "../../generated/OpenFormat/OpenFormat";
import {
  Attribute,
  Creator,
  ExtensionData,
  Owner,
  OwnerToken,
  Payout,
  Property,
  SaleData,
  Stakeholder,
  Token,
} from "../../generated/schema";
import { getStringValue, parseJsonFromIpfs } from "../helpers/common";

export function handleApproval(event: Approval): void {
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract._shares(...)
  // - contract.approvedDepositExtension(...)
  // - contract.approvedRoyaltyExtension(...)
  // - contract.balanceOf(...)
  // - contract.contractCreator(...)
  // - contract.creatorOf(...)
  // - contract.getApproved(...)
  // - contract.getPrimaryCommissionPct(...)
  // - contract.getSecondaryCommissionPct(...)
  // - contract.getTokenSalePrice(...)
  // - contract.isApprovedForAll(...)
  // - contract.maxSupply(...)
  // - contract.metadataURI(...)
  // - contract.mintingPrice(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.paused(...)
  // - contract.payee(...)
  // - contract.primaryCommissionPct(...)
  // - contract.released(...)
  // - contract.released(...)
  // - contract.royaltyInfo(...)
  // - contract.secondaryCommissionPct(...)
  // - contract.shares(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenByIndex(...)
  // - contract.tokenOfOwnerByIndex(...)
  // - contract.tokenURI(...)
  // - contract.totalDepositedAmount(...)
  // - contract.totalDepositedReleased(...)
  // - contract.totalReleased(...)
  // - contract.totalReleased(...)
  // - contract.totalSupply(...)
}

export function handleApprovedDepositExtensionSet(
  event: ApprovedDepositExtensionSet
): void {
  const extensionID = event.address.toHex();

  let token = Token.load(event.address.toHex());
  let extensionData = ExtensionData.load(extensionID);

  if (token) {
    if (!extensionData) {
      extensionData = new ExtensionData(extensionID);
      token.extensionData = extensionID;
    }
    extensionData.approvedDepositExtension = event.params.contractAddress.toHex();
    extensionData.save();
    token.save();
  }
}

export function handleCommissionPaid(event: CommissionPaid): void {}

export function handleCreated(event: Created): void {
  let token = new Token(event.address.toHex());
  let saleData = new SaleData(event.address.toHex());

  /*
   * Handle Contract Data
   */
  token.symbol = event.params.symbol.toString();
  token.createdAt = event.block.timestamp;
  token.saleData = event.address.toHex();

  /*
   * Handle Sale Data
   */
  if (event.params.mintingPrice) {
    saleData.salePrice = event.params.mintingPrice;
    saleData.createdAt = event.block.timestamp;
    saleData.maxSupply = event.params.maxSupply;
  }

  const jsonData: Wrapped<JSONValue> | null = parseJsonFromIpfs(
    event.params.metadataURI
  );

  if (jsonData != null) {
    let properties = new Array<string>();
    const parsedMetadata = jsonData.inner.toObject();

    if (getStringValue(parsedMetadata, "factory_id") != null) {
      token.factory_id = getStringValue(parsedMetadata, "factory_id");
    }

    if (getStringValue(parsedMetadata, "factory_id") != null) {
      token.release_type = getStringValue(parsedMetadata, "release_type");
    }
    /*
     * Handle Metadata
     */
    for (let i = 0; i < parsedMetadata.entries.length; i++) {
      const entry = parsedMetadata.entries[i];

      if (entry.key !== "attributes") {
        if (entry.value.kind == JSONValueKind.STRING) {
          let property = Property.load(
            entry.key + "-" + entry.value.toString()
          );

          if (!property) {
            property = new Property(entry.key + "-" + entry.value.toString());
            property.key = entry.key;
            property.value = entry.value.toString();
          }
          property.save();
          properties.push(entry.key + "-" + entry.value.toString());
        }
      }
    }

    /*
     * Handle Attributes
     */

    let attributesJSON = parsedMetadata.get("attributes");

    if (attributesJSON && attributesJSON.kind === JSONValueKind.ARRAY) {
      let attrArr = attributesJSON.toArray();

      if (attrArr.length > 0) {
        let attributes = new Array<string>();
        for (let i = 0; i < attrArr.length; i++) {
          const attrMap = attrArr[i].toObject();

          let attrName = "";
          let attrValue = "";

          if (
            attrMap.isSet("trait_type") &&
            attrMap.isSet("value") &&
            attrMap.get("trait_type")!.kind === JSONValueKind.STRING &&
            attrMap.get("value")!.kind === JSONValueKind.STRING
          ) {
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
        token.attributes = attributes;
      }
    }
    token.properties = properties;
  }

  /*
   * Handle Creator
   */
  let creator = Creator.load(event.transaction.from.toHex());

  if (!creator) {
    creator = new Creator(event.transaction.from.toHex());
  }

  token.creator = creator.id;
  creator.save();
  token.save();
  saleData.save();
}

export function handleERC20TokenBalanceWithdrawn(
  event: ERC20TokenBalanceWithdrawn
): void {}

export function handleERC20TotalDepositedAmountUpdated(
  event: ERC20TotalDepositedAmountUpdated
): void {}

export function handleMaxSupplySet(event: MaxSupplySet): void {}

export function handleMinted(event: Minted): void {
  let token = Token.load(event.address.toHex());
  let saleData = SaleData.load(event.address.toHex());
  let contract = OpenFormat.bind(event.address);
  let ownerMedia = new OwnerToken(
    `${event.params.owner.toHex()}-${event.address.toHex()}-${
      event.params.newTokenId
    }`
  );
  let owner = Owner.load(event.params.owner.toHex());

  if (token && saleData) {
    saleData.totalEarnings = contract
      .totalSupply()
      .times(contract.mintingPrice());
    saleData.totalSold = contract.totalSupply();
    saleData.save();

    ownerMedia.token = event.address.toHex();
    ownerMedia.owner = event.params.owner.toHex();
    ownerMedia.save();

    if (!owner) {
      owner = new Owner(event.params.owner.toHex());
      owner.save();
    }
  }
}

export function handleMintingPriceSet(event: MintingPriceSet): void {}

export function handleOwnershipTransferred(
  event: OwnershipTransferred
): void {}

export function handlePausedStateSet(event: PausedStateSet): void {}

export function handleSharesAllocated(event: SharesAllocated): void {
  // let contract = OpenFormat.bind(event.address);
  // let stakeholderFrom = Stakeholder.load(
  //   event.params.from.toHex() + "-" + event.address.toHex()
  // );
  // let stakeholderTo = Stakeholder.load(
  //   event.params.to.toHex() + "-" + event.address.toHex()
  // );
  // if (stakeholderFrom && stakeholderTo) {
  //   contract.
  //   const fromShares = contract.shares(event.params.from);
  //   const toShares = contract.shares(event.params.to);
  //   stakeholderFrom.share = fromShares;
  //   stakeholderTo.share = toShares;
  //   stakeholderFrom.save();
  //   stakeholderTo.save();
  // }
}

export function handlePaymentReceived(event: PaymentReceived): void {}

// export function handlePaymentReleased(event: PaymentReleased): void {
//   let token = Token.load(event.address.toHex());
//   let saleData = SaleData.load(event.address.toHex());
//   let contract = OpenFormat.bind(event.address);
//   let payout = new Payout(
//     event.address.toHex() + "-" + event.params.to.toHex()
//   );

//   if (token && saleData) {
//     payout.account = event.params.to.toHex();
//     payout.amount = event.params.amount;
//     payout.token = event.address.toHex();
//     payout.createdAt = event.block.timestamp;
//     payout.transactionHash = event.transaction.hash;
//     payout.save();

//     saleData.totalReleased = contract
//       .totalReleased1()
//       .plus(event.params.amount);
//     saleData.save();
//   }
// }

export function handlePrimaryCommissionSet(
  event: PrimaryCommissionSet
): void {
  let token = Token.load(event.address.toHex());
  let saleData = SaleData.load(event.address.toHex());

  if (token && saleData) {
    saleData.primaryCommission = event.params.amount;
    saleData.save();
  }
}

export function handleRoyaltiesSet(event: RoyaltiesSet): void {
  let token = Token.load(event.address.toHex());
  let saleData = SaleData.load(event.address.toHex());

  if (token && saleData) {
    saleData.royaltiesPercentage = event.params.percentage;
    saleData.save();
  }
}

export function handleRoyaltyPaid(event: RoyaltyPaid): void {}

export function handleSalePriceSet(event: SalePriceSet): void {
  let token = Token.load(event.address.toHex());
  let saleData = SaleData.load(event.address.toHex());

  if (token && saleData) {
    saleData.salePrice = event.params.salePrice;
    saleData.save();
  }
}

export function handleSecondaryCommissionSet(
  event: SecondaryCommissionSet
): void {
  let token = Token.load(event.address.toHex());
  let saleData = SaleData.load(event.address.toHex());

  if (token && saleData) {
    saleData.secondaryCommission = event.params.amount;
    saleData.save();
  }
}

export function handleSold(event: Sold): void {
  let token = Token.load(event.address.toHex());
  let saleData = SaleData.load(event.address.toHex());
  let contract = OpenFormat.bind(event.address);
  // get ownerRelease - Must exist to be able to sell
  let ownerMedia = OwnerToken.load(
    `${event.params.oldOwner.toHex()}-${event.address.toHex()}-${
      event.params.tokenId
    }`
  );
  // check for newOwner
  let newOwner = Owner.load(event.params.newOwner.toHex());

  if (token && saleData) {
    saleData.totalEarnings = contract
      .totalSupply()
      .times(event.params.salePrice);
    saleData.totalSold = contract.totalSupply();
    saleData.save();

    if (ownerMedia) {
      store.remove(
        "OwnerToken",
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

export function handleTokenBalanceWithdrawn(
  event: TokenBalanceWithdrawn
): void {}

export function handleTotalDepositedAmountUpdated(
  event: TotalDepositedAmountUpdated
): void {}

export function handleTransfer(event: Transfer): void {}
