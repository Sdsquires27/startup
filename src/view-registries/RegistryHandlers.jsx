export function itemsExist(items){
  return items !== "" && items !== "undefined" && items !== undefined && items !== "[]";
}

export async function removeRegistryItem(itemIndex, username, updateFunction) {
  await fetch(`/api/registry/${username}/${itemIndex}`, {
    method: 'DELETE',
  });
  updateFunction();
}