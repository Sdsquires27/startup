import React from 'react';
import './view-registry.css'
import { parseRegistryItems, itemsExist, removeRegistryItem } from './RegistryHandlers';


export function ViewRegistry({userName}) {
  const [curRegistryItems, setCurRegistryItems] = React.useState();
  const [curClaimedStatus, setCurClaimedStatus] = React.useState();
  const [curUser, setCurUser] = React.useState();

  React.useEffect(() => {
    if (curUser === undefined) return;
    setCurRegistryItems(localStorage.getItem(curUser + "'s registryItems"));
    setCurClaimedStatus(localStorage.getItem(curUser + "'s claimedStatus"));
    setInterval(() => {
      var [claimedStatus] = parseRegistryItems([curClaimedStatus]);
      if (claimedStatus === undefined) return;
      for (let i = 0; i < claimedStatus.length; i++){
        if (claimedStatus[i] === "null"){
          claimedStatus[i] = "WebSocketUser";
          setCurClaimedStatus(JSON.stringify(claimedStatus));
          return;
        }
      }
    }, 10000); // simulate WebSocket updates every 5 seconds
  }, [curUser]);

  React.useEffect(() => {
    localStorage.setItem(curUser + "'s registryItems", curRegistryItems);
    localStorage.setItem(curUser + "'s claimedStatus", curClaimedStatus);
  }, [curRegistryItems, curClaimedStatus]);

function findUser(name){
  if (name === "" || name === userName) return;
  setCurUser(name);
}

function handleClick(itemIndex){
  var [claimedStatus] = parseRegistryItems([curClaimedStatus]);
  if (claimedStatus[itemIndex] === "null") claimedStatus[itemIndex] = userName;
  else if (claimedStatus[itemIndex] === userName) claimedStatus[itemIndex] = "null";
  setCurClaimedStatus(JSON.stringify(claimedStatus));
}

function handleDelete(itemIndex){
  var [claimedStatus] = parseRegistryItems([curClaimedStatus]);
  claimedStatus[itemIndex] = "null";
  setCurClaimedStatus(JSON.stringify(claimedStatus));
}

function testInclusion(list, str){ // this is necessary due to substrings
  if (list === undefined || list === null) return false;
  for (let i = 0; i < list.length; i++){
    if (list[i] === str) return true;
  }
  return false;
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
                <img src={pictureLink} className="pic-icon" width="10" height="10" onClick={() => handleClick(i)}/>
              </td>
            </tr>);
      }  
  return itemList;
}

function PopulateClaimedItems(){
  const itemList = [];
  var [items, claimedStatus] = parseRegistryItems([curRegistryItems, curClaimedStatus]);
  for (let i = 0; i < items.length; i++){
    if (claimedStatus[i] === userName){
      itemList.push(
        <tr key={i}>
              <td>
                {items[i]}
              </td>
              <td>
                <img src="/trash.png" width="10" height="10" className="pic-icon" onClick={() => handleDelete(i)}/>
              </td>
              <td>
                <img src="/checkmark.png" width="10" height="10" className="pic-icon" onClick={() => removeRegistryItem(i, curRegistryItems, curClaimedStatus, setCurRegistryItems, setCurClaimedStatus)}/>
              </td>
            </tr>
      );
    }
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
        
        {testInclusion(parseRegistryItems([curClaimedStatus])[0], userName) && (
        <table className="table table-striped table-bordered equal-sized-table">
            <thead>
            <tr>
              <th id="claimed-items">
                Items&emsp;  
              </th>
              <th>
                Cancel  &emsp;  
              </th>
              <th>
                Gifted
              </th>
            </tr>
            </thead>
            <tbody>
              {PopulateClaimedItems()}
            </tbody>

        </table>
        )}      
      </div>

)}




    </main>
  );
}