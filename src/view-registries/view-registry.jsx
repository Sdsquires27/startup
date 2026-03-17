import React from 'react';
import './view-registry.css'
import {itemsExist, removeRegistryItem } from './RegistryHandlers';


export function ViewRegistry({userName}) {
  const [curRegistry, setCurRegistry] = React.useState();
  const [curRegistryItems, setCurRegistryItems] = React.useState();
  const [curClaimedStatus, setCurClaimedStatus] = React.useState();
  const [curRegistryIds, setCurRegistryIds] = React.useState();
  const [curUser, setCurUser] = React.useState();

setInterval(async () => {
  update();
}, 10000); // simulate WebSocket updates every 10 seconds

async function update()
{
    fetch(`/api/registry/${curUser}`)
      .then((response) => response.text)
      .then((items) =>{
        setCurRegistry(items);
      });
}

  //When curUser is updated
  React.useEffect(() => {
    if (!curUser) return;
    update();

  }, [curUser]);

  React.useEffect(() => {
    setCurRegistryItems(curRegistry.map(item=>item.name));
    setCurClaimedStatus(curRegistry.map(item=>item.status));
    setCurRegistryIds(curRegistry.map(item=>item.id));
  }, [curRegistry]);

function findUser(name){
  if (name === "" || name === userName) return;
  setCurUser(name);
}

async function handleClick(itemIndex){ // handle claiming of item
  var [claimedStatus] = parseRegistryItems([curClaimedStatus]);
  if (claimedStatus[itemIndex] === "null")
  {
    await fetch(`/api/registry/${curUser}/${itemIndex}/claim`,{
      method: 'POST'
    })
      .then((response) => response.text())
      .then((claimStatuses) => {
        setCurClaimedStatus(claimStatuses);
      });
  }
  else
  {
      await fetch(`/api/registry/${curUser}/${itemIndex}/unclaim`,{
      method: 'POST'
    })
      .then((response) => response.text())
      .then((claimStatuses) => {
        setCurClaimedStatus(claimStatuses);
      });
  }
}

// Unclaiming item
async function handleDelete(itemIndex){
  await fetch(`/api/registry/${curUser}/${itemIndex}/unclaim`,{
      method: 'POST'
    });
    update();
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
    for (let i = 0; i < curRegistryItems.length; i++){
      var claimedUser = curClaimedStatus[i];
      if (claimedUser === "null") var pictureLink = "openCircle.png";
      else claimedUser === userName ? pictureLink = "checkedImage.png" : pictureLink = "closedCircle.png";
      
      itemList.push(
            <tr key={i}>
              <td>
                {curRegistryItems[i]}
              </td>
              <td>
                <img src={pictureLink} className="pic-icon" width="10" height="10" onClick={() => handleClick(curRegistryIds[i])}/>
              </td>
            </tr>);
      }  
  return itemList;
}

function PopulateClaimedItems(){
  const itemList = [];
  for (let i = 0; i < curRegistry.length; i++){
    if (curClaimedStatus[i] === userName){
      itemList.push(
        <tr key={i}>
              <td>
                {curRegistryItems[i]}
              </td>
              <td>
                <img src="/trash.png" width="10" height="10" className="pic-icon" onClick={() => handleDelete(curRegistryIds[i])}/>
              </td>
              <td>
                <img src="/checkmark.png" width="10" height="10" className="pic-icon" onClick={() => removeRegistryItem(curRegistryIds[i], userName, update)}/>
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
        
        {testInclusion(curClaimedStatus, userName) && (
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