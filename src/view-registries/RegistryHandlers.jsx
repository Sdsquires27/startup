export function itemsExist(items){
  return items !== undefined && items.length > 0;
}

export async function removeRegistryItem(itemIndex, username, updateFunction) {
  console.log("Delete:", username, itemIndex);
  await fetch(`/api/registry/${username}/${itemIndex}`, {
    method: 'DELETE',
  });
  updateFunction();
}