import React from 'react';
import './my-registry.css';



export function MyRegistry({userName}) {

  const [registryItems, setRegistryItems] = React.useState(localStorage.getItem(userName + "'s registryItems") || "");

function parseRegistryItems(){
  if (registryItems === undefined) return [];
    return JSON.parse(registryItems);
}

function changeRegistryItems(itemName){
  if (itemName === "") return;
  var curList = [];
  if (registryItems !== "" &&registryItems !== "undefined") curList = parseRegistryItems();
  curList.push(itemName);
  setRegistryItems(JSON.stringify(curList));
}

  function populateRegistryItems(){
    const itemList = [];
    const items = parseRegistryItems();
    for (let i = 0; i < items.length; i++){
      itemList.push(<tr>
              <td>
                {items[i]}
              </td>
              <td>
                <img src="trash.png" width="10" height="10"/>
              </td>
            </tr>);
  }
  return itemList;
}

  React.useEffect(() => {
    localStorage.setItem(userName + "'s registryItems", registryItems);

  }, [registryItems]);

  return (
    <main>
        <hr />

        {registryItems !== "" && registryItems !== "undefined" && (<table className="table table-striped table-light table-bordered">
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

        {registryItems === "" || registryItems === "undefined" && (
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