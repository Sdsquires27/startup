export function parseRegistryItems(thingsToParse){
  return thingsToParse.map(item => JSON.parse(item) || []);
}

export function itemsExist(items){
  return items !== "" && items !== "undefined" && items !== undefined;
}

export async function removeRegistryItem(itemIndex, username, setRegistryItems, setClaimedStatus) {
  await fetch(`/api/registry/${username}/${itemIndex}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      if(JSON.parse(data.items).length === 0) {
        setRegistryItems("");
        setClaimedStatus ?? setClaimedStatus("");
      }
      else {
        setRegistryItems(data.items);
        setClaimedStatus ?? setClaimedStatus(data.claimStatuses);
      }

    });
}