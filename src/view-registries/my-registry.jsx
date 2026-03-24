import React from 'react';
import './my-registry.css';
import {itemsExist, registryHandler, removeRegistryItem} from './RegistryHandlers';

export function MyRegistry({userName}) {


  const [registryItems, setRegistryItems] = React.useState([]);

function getItems()
{
    fetch(`/api/registry/${userName}`)
      .then((response) => response.json())
      .then((items) => {
        setRegistryItems(items);
      });
}

// Load the items initially, set items
  React.useEffect(() =>{
    getItems();
    const handler = (event) => {
      if (event.type === 'ITEM_UPDATED') {
        setRegistryItems(prev => prev.map(i => i.id === event.payload.id ? event.payload : i));
      }
      if (event.type === 'ITEM_ADDED') {
        setRegistryItems(prev => [...prev, event.payload]);
      }
      if (event.type === 'ITEM_DELETED') {
        setRegistryItems(prev => prev.filter(i => i.id !== event.payload.id));
      }
    };

    registryHandler.addHandler(handler);
    return () => registryHandler.removeHandler(handler);
  }, []);

async function changeRegistryItems(itemName){
  fetch(`/api/registry/${itemName}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  const newItem = await response.json();
  setRegistryItems(prev => [...prev, newItem]);
  registryHandler.broadcastEvent('ITEM_ADDED', newItem);
}

  function populateRegistryItems(){
    const itemList = [];

    for (let i = 0; i < registryItems.length; i++){
      itemList.push(<tr key={i}>
              <td>
                {registryItems[i].name}
              </td>
              <td>
                <img className="pic-icon" src="trash.png" width="10" height="10" onClick={() => removeRegistryItem(registryItems[i].id, userName, setRegistryItems)}/>
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