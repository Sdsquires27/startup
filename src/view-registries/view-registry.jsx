import React from 'react';
import './view-registry.css'
import { parseRegistryItems, itemsExist } from './RegistryHandlers';


export function ViewRegistry({userName}) {
  const [curRegistryItems, setCurRegistryItems] = React.useState();
  const [curClaimedStatus, setCurClaimedStatus] = React.useState();
  const [curUser, setCurUser] = React.useState();

  React.useEffect(() => {
    if (curUser === undefined) return;
    setCurRegistryItems(localStorage.getItem(curUser + "'s registryItems"));
    setCurClaimedStatus(localStorage.getItem(curUser + "'s claimedStatus"));
  }, [curUser]);

function findUser(name){
  if (name === "" || name === userName) return;
  setCurUser(name);
}

function PopulateRegistryItems(){
    const itemList = [];
    var [items, claimedStatus] = parseRegistryItems([curRegistryItems, curClaimedStatus]);
    for (let i = 0; i < items.length; i++){
      var claimedUser = claimedStatus[i];
      if (claimedUser === "null") var pictureLink = "openCircle.png";
      else claimedUser === userName ? pictureLink = "checkedImage.png" : pictureLink = "closedCircle.png";
      
      itemList.push(
            <tr key={i}>
              <td>
                {items[i]}
              </td>
              <td>
                <img src={pictureLink} width="10" height="10"/>
              </td>
            </tr>);
    }
  return itemList;
}



  return (
    
    <main>
      <div>
        <form method="get">
          <div className="add-item">
            <input className="form-control" id="user-input" type="text" placeholder="Enter name here" />
            <button className="btn btn-primary" id="search-user-button" type="button" onClick={() => findUser(document.getElementById("user-input").value)}>Search</button>
          </div>
        </form>
      </div>

      {itemsExist(curRegistryItems) && (
      <div className="tables-container">
          <table className="table table-striped table-light table-bordered equal-sized-table">
            <thead>
            <tr>
              <th>
                Registry &emsp;       
              </th>
              <th>
                Status
              </th>
            </tr>
            </thead>
            <tbody>
              {PopulateRegistryItems()}
            </tbody>
          </table>
        
        {curClaimedStatus.includes(userName) && (
        <table className="table table-striped table-bordered equal-sized-table">
            <thead>
            <tr>
              <th id="claimed-items">
                Items&emsp;  
              </th>
              <th>
                Cancel&emsp;  
              </th>
              <th>
                Purchase
              </th>
            </tr>
            </thead>
            <tbody>

            </tbody>

        </table>
        )}
      </div>

      )}




    </main>


            /* 
            <tr>
              <td>
                Stationary Bag
              </td>
              <td>
                <img src="/trash.png" width="10" height="10"/>
              </td>
              <td>
                <img src="/icon.png" width="10" height="10"/>
              </td>
            </tr>
            
            <tr>
              <td>
                Backpack
              </td>
              <td>
                <img src="/closedCircle.png" width="10" height="10"/>
              </td>
            </tr>*/
  );
}