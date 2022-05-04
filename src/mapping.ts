import { BigInt } from "@graphprotocol/graph-ts"
import {
  OpenFormat,
  Approval,
  ApprovalForAll,
  ApprovedDepositExtensionSet,
  ApprovedRoyaltyExtensionCustomPctSet,
  ApprovedRoyaltyExtensionSet,
  CommissionPaid,
  Created,
  ERC20PaymentReleased,
  ERC20TokenBalanceWithdrawn,
  ERC20TotalDepositedAmountUpdated,
  MaxSupplySet,
  Minted,
  MintingPriceSet,
  OwnershipTransferred,
  PausedStateSet,
  PayeeAdded,
  PayeeRemoved,
  PaymentReceived,
  PaymentReleased,
  PrimaryCommissionSet,
  RoyaltiesSet,
  RoyaltyPaid,
  SalePriceSet,
  SecondaryCommissionSet,
  Sold,
  TokenBalanceWithdrawn,
  TotalDepositedAmountUpdated,
  Transfer
} from "../generated/OpenFormat/OpenFormat"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.approved = event.params.approved

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
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

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleApprovedDepositExtensionSet(
  event: ApprovedDepositExtensionSet
): void {}

export function handleApprovedRoyaltyExtensionCustomPctSet(
  event: ApprovedRoyaltyExtensionCustomPctSet
): void {}

export function handleApprovedRoyaltyExtensionSet(
  event: ApprovedRoyaltyExtensionSet
): void {}

export function handleCommissionPaid(event: CommissionPaid): void {}

export function handleCreated(event: Created): void {}

export function handleERC20PaymentReleased(event: ERC20PaymentReleased): void {}

export function handleERC20TokenBalanceWithdrawn(
  event: ERC20TokenBalanceWithdrawn
): void {}

export function handleERC20TotalDepositedAmountUpdated(
  event: ERC20TotalDepositedAmountUpdated
): void {}

export function handleMaxSupplySet(event: MaxSupplySet): void {}

export function handleMinted(event: Minted): void {}

export function handleMintingPriceSet(event: MintingPriceSet): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePausedStateSet(event: PausedStateSet): void {}

export function handlePayeeAdded(event: PayeeAdded): void {}

export function handlePayeeRemoved(event: PayeeRemoved): void {}

export function handlePaymentReceived(event: PaymentReceived): void {}

export function handlePaymentReleased(event: PaymentReleased): void {}

export function handlePrimaryCommissionSet(event: PrimaryCommissionSet): void {}

export function handleRoyaltiesSet(event: RoyaltiesSet): void {}

export function handleRoyaltyPaid(event: RoyaltyPaid): void {}

export function handleSalePriceSet(event: SalePriceSet): void {}

export function handleSecondaryCommissionSet(
  event: SecondaryCommissionSet
): void {}

export function handleSold(event: Sold): void {}

export function handleTokenBalanceWithdrawn(
  event: TokenBalanceWithdrawn
): void {}

export function handleTotalDepositedAmountUpdated(
  event: TotalDepositedAmountUpdated
): void {}

export function handleTransfer(event: Transfer): void {}
