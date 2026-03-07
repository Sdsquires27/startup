import React from 'react';
import './my-registry.css';
import { parseRegistryItems, itemsExist, removeRegistryItem } from './RegistryHandlers';

export function MyRegistry({userName}) {


  const [registryItems, setRegistryItems] = React.useState('[]');

  React.useEffect(() =>{
    fetch(`/api/registry/${userName}`)
      .then((response) => response.text())
      .then((items) => {
        setRegistryItems(items);
      });
  }, []);

async function changeRegistryItems(itemName){
  await fetch(`/api/registry/${itemName}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
      .then((response) => response.json())
      .then((items) => {
        setRegistryItems(items);
  });
}

  function populateRegistryItems(){
    const itemList = [];
    for (let i = 0; i < registryItems.length; i++){
      itemList.push(<tr>
              <td>
                {registryItems[i]}
              </td>
              <td>
                <img className="pic-icon" src="trash.png" width="10" height="10" onClick={() => removeRegistryItem(i, userName, setRegistryItems, null)}/>
              </td>
            </tr>);
  }
  return itemList;
}


  return (
    <main>

        {itemsExist(registryItems) && (<table className="table table-striped table-light table-bordered">
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

        {!itemsExist(registryItems) && (
          <p>It looks like your registry is empty! Use the form below to add more items to your registry!</p>
        )}

          <form method="get">
            <div className ="add-item">
              <input className="form-control" id="item-input" type="text" placeholder="Add item..." />
              <button className="btn btn-primary" id="add-item-button" type="button" onClick={() => changeRegistryItems(document.getElementById("item-input").value)}>Add</button>
            </div>
          </form>
    </main>
  );
}