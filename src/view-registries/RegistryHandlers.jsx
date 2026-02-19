export function parseRegistryItems(thingsToParse){
  return thingsToParse.map(item => JSON.parse(item) || []);
}

export function itemsExist(items){
  return items !== "" && items !== "undefined" && items !== undefined;
}