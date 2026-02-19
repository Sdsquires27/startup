export function parseRegistryItems(thingsToParse){
  return thingsToParse.map(item => JSON.parse(item) || []);
}

export function itemsExist(items){
  return items !== "" && items !== "undefined" && items !== undefined;
}

export function removeRegistryItem(itemIndex, registryItems, claimedStatus, setRegistryItems, setClaimedStatus) {
  var [curList, curClaimedStatus] = parseRegistryItems([registryItems, claimedStatus]);
  const itemName = curList[itemIndex];
  const claimedUser = curClaimedStatus[itemIndex];
  curList.splice(itemIndex, 1);
  curClaimedStatus.splice(itemIndex, 1);
  if(curList.length === 0) {
    setRegistryItems("");
    setClaimedStatus("");
  }
  else {
    setRegistryItems(JSON.stringify(curList));
    setClaimedStatus(JSON.stringify(curClaimedStatus));
  }
}