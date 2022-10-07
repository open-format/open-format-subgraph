import {
  BigInt,
  Bytes,
  ipfs,
  json,
  JSONValue,
  log,
  TypedMap,
  Wrapped,
} from "@graphprotocol/graph-ts";

export const ONE = BigInt.fromI32(1);

export function getStringValue(
  obj: TypedMap<string, JSONValue>,
  key: string
): string {
  if (obj.isSet(key) && !obj.get(key)!.isNull()) {
    return obj.get(key)!.toString();
  }
  return "";
}

export function getArrayValue(
  obj: TypedMap<string, JSONValue>,
  key: string
): Array<JSONValue> {
  if (obj.isSet(key) && !obj.get(key)!.isNull()) {
    return obj.get(key)!.toArray();
  }
  return [];
}

export function parseJsonFromIpfs(
  jsonUri: string
): Wrapped<JSONValue> | null {
  if (!jsonUri.startsWith("ipfs://")) {
    return null;
  }
  const ipfsHashParts = jsonUri.split("//");
  const ipfsHash = ipfsHashParts[1];

  if (ipfsHash.length < 1) {
    log.info("NO IPFS HASH FOUND WITH URI {}", [jsonUri]);
    return null;
  }

  let data = ipfs.cat(ipfsHash);
  if (!data || (data as Bytes).length < 1) {
    log.info("JSON DATA FROM IPFS IS EMPTY {}", [ipfsHash]);
    return null;
  }

  const jsonData = json.fromBytes(data as Bytes);
  if (jsonData.isNull()) {
    log.info("JSON DATA FROM IPFS IS NULL {}", [ipfsHash]);
    return null;
  }

  return new Wrapped(jsonData);
}
