export function itemsExist(items){
  return items !== "" && items !== "undefined" && items !== undefined && items !== "[]";
}

export async function removeRegistryItem(itemIndex, username, setRegistryItems, setClaimedStatus) {
  await fetch(`/api/registry/${username}/${itemIndex}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {

      setRegistryItems(data.items);
      setClaimedStatus && setClaimedStatus(data.claimStatuses);

    });
}