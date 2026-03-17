export function itemsExist(items){
  return items !== "" && items !== "undefined" && items !== undefined && items !== "[]";
}

export async function removeRegistryItem(itemIndex, username, updateFunction) {
  console.log("Delete request: " + username + " " + itemIndex);
  await fetch(`/api/registry/${username}/${itemIndex}`, {
    method: 'DELETE',
  });
  updateFunction();
}