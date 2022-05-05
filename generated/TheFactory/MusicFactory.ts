// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class ERC20PaymentReleased extends ethereum.Event {
  get params(): ERC20PaymentReleased__Params {
    return new ERC20PaymentReleased__Params(this);
  }
}

export class ERC20PaymentReleased__Params {
  _event: ERC20PaymentReleased;

  constructor(event: ERC20PaymentReleased) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PausedStateSet extends ethereum.Event {
  get params(): PausedStateSet__Params {
    return new PausedStateSet__Params(this);
  }
}

export class PausedStateSet__Params {
  _event: PausedStateSet;

  constructor(event: PausedStateSet) {
    this._event = event;
  }

  get isPaused(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class PayeeAdded extends ethereum.Event {
  get params(): PayeeAdded__Params {
    return new PayeeAdded__Params(this);
  }
}

export class PayeeAdded__Params {
  _event: PayeeAdded;

  constructor(event: PayeeAdded) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get shares(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class PaymentReceived extends ethereum.Event {
  get params(): PaymentReceived__Params {
    return new PaymentReceived__Params(this);
  }
}

export class PaymentReceived__Params {
  _event: PaymentReceived;

  constructor(event: PaymentReceived) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class PaymentReleased extends ethereum.Event {
  get params(): PaymentReleased__Params {
    return new PaymentReleased__Params(this);
  }
}

export class PaymentReleased__Params {
  _event: PaymentReleased;

  constructor(event: PaymentReleased) {
    this._event = event;
  }

  get to(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ReleaseCreated extends ethereum.Event {
  get params(): ReleaseCreated__Params {
    return new ReleaseCreated__Params(this);
  }
}

export class ReleaseCreated__Params {
  _event: ReleaseCreated;

  constructor(event: ReleaseCreated) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get royaltiesPercentage(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get salePrice(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get metadataURI_(): string {
    return this._event.parameters[3].value.toString();
  }

  get maxSupply(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get symbol(): string {
    return this._event.parameters[5].value.toString();
  }

  get name(): string {
    return this._event.parameters[6].value.toString();
  }
}

export class ReleaseMinted extends ethereum.Event {
  get params(): ReleaseMinted__Params {
    return new ReleaseMinted__Params(this);
  }
}

export class ReleaseMinted__Params {
  _event: ReleaseMinted;

  constructor(event: ReleaseMinted) {
    this._event = event;
  }

  get newTokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get receiver(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class ReleaseSold extends ethereum.Event {
  get params(): ReleaseSold__Params {
    return new ReleaseSold__Params(this);
  }
}

export class ReleaseSold__Params {
  _event: ReleaseSold;

  constructor(event: ReleaseSold) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get oldOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get salePrice(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class RoyaltiesSet extends ethereum.Event {
  get params(): RoyaltiesSet__Params {
    return new RoyaltiesSet__Params(this);
  }
}

export class RoyaltiesSet__Params {
  _event: RoyaltiesSet;

  constructor(event: RoyaltiesSet) {
    this._event = event;
  }

  get receiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get percentage(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class SalePriceSet extends ethereum.Event {
  get params(): SalePriceSet__Params {
    return new SalePriceSet__Params(this);
  }
}

export class SalePriceSet__Params {
  _event: SalePriceSet;

  constructor(event: SalePriceSet) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get salePrice(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class WithdrawStuckERC20 extends ethereum.Event {
  get params(): WithdrawStuckERC20__Params {
    return new WithdrawStuckERC20__Params(this);
  }
}

export class WithdrawStuckERC20__Params {
  _event: WithdrawStuckERC20;

  constructor(event: WithdrawStuckERC20) {
    this._event = event;
  }

  get receiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class WithdrawStuckERC721 extends ethereum.Event {
  get params(): WithdrawStuckERC721__Params {
    return new WithdrawStuckERC721__Params(this);
  }
}

export class WithdrawStuckERC721__Params {
  _event: WithdrawStuckERC721;

  constructor(event: WithdrawStuckERC721) {
    this._event = event;
  }

  get receiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class WithdrawStuckEther extends ethereum.Event {
  get params(): WithdrawStuckEther__Params {
    return new WithdrawStuckEther__Params(this);
  }
}

export class WithdrawStuckEther__Params {
  _event: WithdrawStuckEther;

  constructor(event: WithdrawStuckEther) {
    this._event = event;
  }

  get receiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MusicFactory__royaltyInfoResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class MusicFactory extends ethereum.SmartContract {
  static bind(address: Address): MusicFactory {
    return new MusicFactory("MusicFactory", address);
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  creatorOf(tokenId: BigInt): Address {
    let result = super.call("creatorOf", "creatorOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_creatorOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("creatorOf", "creatorOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTokenSalePrice(tokenId: BigInt): BigInt {
    let result = super.call(
      "getTokenSalePrice",
      "getTokenSalePrice(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toBigInt();
  }

  try_getTokenSalePrice(tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTokenSalePrice",
      "getTokenSalePrice(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxSupply(): BigInt {
    let result = super.call("maxSupply", "maxSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxSupply", "maxSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  metadataURI(): string {
    let result = super.call("metadataURI", "metadataURI():(string)", []);

    return result[0].toString();
  }

  try_metadataURI(): ethereum.CallResult<string> {
    let result = super.tryCall("metadataURI", "metadataURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  payee(index: BigInt): Address {
    let result = super.call("payee", "payee(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toAddress();
  }

  try_payee(index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("payee", "payee(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  releaseSalePrice(): BigInt {
    let result = super.call(
      "releaseSalePrice",
      "releaseSalePrice():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_releaseSalePrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "releaseSalePrice",
      "releaseSalePrice():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  released(token: Address, account: Address): BigInt {
    let result = super.call("released", "released(address,address):(uint256)", [
      ethereum.Value.fromAddress(token),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_released(token: Address, account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "released",
      "released(address,address):(uint256)",
      [ethereum.Value.fromAddress(token), ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  released1(account: Address): BigInt {
    let result = super.call("released", "released(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_released1(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("released", "released(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  royaltyInfo(param0: BigInt, value: BigInt): MusicFactory__royaltyInfoResult {
    let result = super.call(
      "royaltyInfo",
      "royaltyInfo(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(value)
      ]
    );

    return new MusicFactory__royaltyInfoResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_royaltyInfo(
    param0: BigInt,
    value: BigInt
  ): ethereum.CallResult<MusicFactory__royaltyInfoResult> {
    let result = super.tryCall(
      "royaltyInfo",
      "royaltyInfo(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(value)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MusicFactory__royaltyInfoResult(
        value[0].toAddress(),
        value[1].toBigInt()
      )
    );
  }

  shares(account: Address): BigInt {
    let result = super.call("shares", "shares(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_shares(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("shares", "shares(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalReleased(token: Address): BigInt {
    let result = super.call(
      "totalReleased",
      "totalReleased(address):(uint256)",
      [ethereum.Value.fromAddress(token)]
    );

    return result[0].toBigInt();
  }

  try_totalReleased(token: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalReleased",
      "totalReleased(address):(uint256)",
      [ethereum.Value.fromAddress(token)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalReleased1(): BigInt {
    let result = super.call("totalReleased", "totalReleased():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalReleased1(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalReleased",
      "totalReleased():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalShares(): BigInt {
    let result = super.call("totalShares", "totalShares():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalShares(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalShares", "totalShares():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get payees_(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get shares_(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get salePrice_(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get name_(): string {
    return this._call.inputValues[3].value.toString();
  }

  get symbol_(): string {
    return this._call.inputValues[4].value.toString();
  }

  get maxSupply_(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get royaltiesPercentage_(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get metadataURI_(): string {
    return this._call.inputValues[7].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class BuyReleaseCall extends ethereum.Call {
  get inputs(): BuyReleaseCall__Inputs {
    return new BuyReleaseCall__Inputs(this);
  }

  get outputs(): BuyReleaseCall__Outputs {
    return new BuyReleaseCall__Outputs(this);
  }
}

export class BuyReleaseCall__Inputs {
  _call: BuyReleaseCall;

  constructor(call: BuyReleaseCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BuyReleaseCall__Outputs {
  _call: BuyReleaseCall;

  constructor(call: BuyReleaseCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class MintReleaseCall extends ethereum.Call {
  get inputs(): MintReleaseCall__Inputs {
    return new MintReleaseCall__Inputs(this);
  }

  get outputs(): MintReleaseCall__Outputs {
    return new MintReleaseCall__Outputs(this);
  }
}

export class MintReleaseCall__Inputs {
  _call: MintReleaseCall;

  constructor(call: MintReleaseCall) {
    this._call = call;
  }

  get creator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class MintReleaseCall__Outputs {
  _call: MintReleaseCall;

  constructor(call: MintReleaseCall) {
    this._call = call;
  }

  get newTokenId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ReleaseCall extends ethereum.Call {
  get inputs(): ReleaseCall__Inputs {
    return new ReleaseCall__Inputs(this);
  }

  get outputs(): ReleaseCall__Outputs {
    return new ReleaseCall__Outputs(this);
  }
}

export class ReleaseCall__Inputs {
  _call: ReleaseCall;

  constructor(call: ReleaseCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ReleaseCall__Outputs {
  _call: ReleaseCall;

  constructor(call: ReleaseCall) {
    this._call = call;
  }
}

export class Release1Call extends ethereum.Call {
  get inputs(): Release1Call__Inputs {
    return new Release1Call__Inputs(this);
  }

  get outputs(): Release1Call__Outputs {
    return new Release1Call__Outputs(this);
  }
}

export class Release1Call__Inputs {
  _call: Release1Call;

  constructor(call: Release1Call) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class Release1Call__Outputs {
  _call: Release1Call;

  constructor(call: Release1Call) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetMetadataURICall extends ethereum.Call {
  get inputs(): SetMetadataURICall__Inputs {
    return new SetMetadataURICall__Inputs(this);
  }

  get outputs(): SetMetadataURICall__Outputs {
    return new SetMetadataURICall__Outputs(this);
  }
}

export class SetMetadataURICall__Inputs {
  _call: SetMetadataURICall;

  constructor(call: SetMetadataURICall) {
    this._call = call;
  }

  get _metadataURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetMetadataURICall__Outputs {
  _call: SetMetadataURICall;

  constructor(call: SetMetadataURICall) {
    this._call = call;
  }
}

export class SetReleaseSalePriceCall extends ethereum.Call {
  get inputs(): SetReleaseSalePriceCall__Inputs {
    return new SetReleaseSalePriceCall__Inputs(this);
  }

  get outputs(): SetReleaseSalePriceCall__Outputs {
    return new SetReleaseSalePriceCall__Outputs(this);
  }
}

export class SetReleaseSalePriceCall__Inputs {
  _call: SetReleaseSalePriceCall;

  constructor(call: SetReleaseSalePriceCall) {
    this._call = call;
  }

  get _salePrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetReleaseSalePriceCall__Outputs {
  _call: SetReleaseSalePriceCall;

  constructor(call: SetReleaseSalePriceCall) {
    this._call = call;
  }
}

export class SetTokenSalePriceCall extends ethereum.Call {
  get inputs(): SetTokenSalePriceCall__Inputs {
    return new SetTokenSalePriceCall__Inputs(this);
  }

  get outputs(): SetTokenSalePriceCall__Outputs {
    return new SetTokenSalePriceCall__Outputs(this);
  }
}

export class SetTokenSalePriceCall__Inputs {
  _call: SetTokenSalePriceCall;

  constructor(call: SetTokenSalePriceCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _salePrice(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetTokenSalePriceCall__Outputs {
  _call: SetTokenSalePriceCall;

  constructor(call: SetTokenSalePriceCall) {
    this._call = call;
  }
}

export class SetTotalSupplyCall extends ethereum.Call {
  get inputs(): SetTotalSupplyCall__Inputs {
    return new SetTotalSupplyCall__Inputs(this);
  }

  get outputs(): SetTotalSupplyCall__Outputs {
    return new SetTotalSupplyCall__Outputs(this);
  }
}

export class SetTotalSupplyCall__Inputs {
  _call: SetTotalSupplyCall;

  constructor(call: SetTotalSupplyCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetTotalSupplyCall__Outputs {
  _call: SetTotalSupplyCall;

  constructor(call: SetTotalSupplyCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawERC721Call extends ethereum.Call {
  get inputs(): WithdrawERC721Call__Inputs {
    return new WithdrawERC721Call__Inputs(this);
  }

  get outputs(): WithdrawERC721Call__Outputs {
    return new WithdrawERC721Call__Outputs(this);
  }
}

export class WithdrawERC721Call__Inputs {
  _call: WithdrawERC721Call;

  constructor(call: WithdrawERC721Call) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class WithdrawERC721Call__Outputs {
  _call: WithdrawERC721Call;

  constructor(call: WithdrawERC721Call) {
    this._call = call;
  }
}

export class WithdrawErc20Call extends ethereum.Call {
  get inputs(): WithdrawErc20Call__Inputs {
    return new WithdrawErc20Call__Inputs(this);
  }

  get outputs(): WithdrawErc20Call__Outputs {
    return new WithdrawErc20Call__Outputs(this);
  }
}

export class WithdrawErc20Call__Inputs {
  _call: WithdrawErc20Call;

  constructor(call: WithdrawErc20Call) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class WithdrawErc20Call__Outputs {
  _call: WithdrawErc20Call;

  constructor(call: WithdrawErc20Call) {
    this._call = call;
  }
}

export class WithdrawEtherCall extends ethereum.Call {
  get inputs(): WithdrawEtherCall__Inputs {
    return new WithdrawEtherCall__Inputs(this);
  }

  get outputs(): WithdrawEtherCall__Outputs {
    return new WithdrawEtherCall__Outputs(this);
  }
}

export class WithdrawEtherCall__Inputs {
  _call: WithdrawEtherCall;

  constructor(call: WithdrawEtherCall) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawEtherCall__Outputs {
  _call: WithdrawEtherCall;

  constructor(call: WithdrawEtherCall) {
    this._call = call;
  }
}
