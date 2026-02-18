import React from 'react';
import './my-registry.css';



export function MyRegistry({userName}) {

  const [registryItems, setRegistryItems] = React.useState(localStorage.getItem(userName + "'s registryItems") || "");
  const [claimedStatus, setClaimedStatus] = React.useState(localStorage.getItem(userName + "'s claimedStatus") || "");

function parseRegistryItems(){
  if (registryItems === undefined) return [];
    return [JSON.parse(registryItems), JSON.parse(claimedStatus)];
}

function changeRegistryItems(itemName){
  if (itemName === "") return;
  var curList = [];
  var curClaimedStatus = [];
  if (registryItems !== "" &&registryItems !== "undefined") [curList, curClaimedStatus] = parseRegistryItems();
  curList.push(itemName);
  curClaimedStatus.push("unclaimed");
  setRegistryItems(JSON.stringify(curList));
  setClaimedStatus(JSON.stringify(curClaimedStatus));
}

function removeRegistryItem(itemIndex){
  var [curList, curClaimedStatus] = parseRegistryItems();
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


  function populateRegistryItems(){
    const itemList = [];
    var [items, claimedStatus] = parseRegistryItems();
    for (let i = 0; i < items.length; i++){
      itemList.push(<tr>
              <td>
                {items[i]}
              </td>
              <td>
                <img className="pic-icon" src="trash.png" width="10" height="10" onClick={() => removeRegistryItem(i)}/>
              </td>
            </tr>);
  }
  return itemList;
}

function RegistryItemsExist(){
  return registryItems !== "" && registryItems !== "undefined";
}

  React.useEffect(() => {
    localStorage.setItem(userName + "'s registryItems", registryItems);
    localStorage.setItem(userName + "'s claimedStatus", claimedStatus);

  }, [registryItems, claimedStatus]);

  return (
    <main>
        <hr />

        {RegistryItemsExist() && (<table className="table table-striped table-light table-bordered">
          <thead className="bg-dark">
            <tr>
              <th scope="col" id="wide-col">
                Registry
              </th>
              <th scope="col" id="thin-col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {populateRegistryItems()}
          </tbody>
          </table>
        )}

        {!RegistryItemsExist() && (
          <p>It looks like your registry is empty! Use the form below to add more items to your registry!</p>
        )}

          <form method="get">
            <div className ="add-item">
              <input className="form-control" id="item-input" type="text" placeholder="Add item..." />
              <button className="btn btn-primary" id="add-item-button" type="button" onClick={() => changeRegistryItems(document.getElementById("item-input").value)}>Add</button>
            </div>
          </form>
        <hr />
        </main>
  );
}