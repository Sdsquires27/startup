import React from 'react';
import './view-registry.css'

export function ViewRegistry({userName}) {
  const [curRegistryItems, setCurRegistryItems] = React.useState();
  const [curClaimedStatus, setCurClaimedStatus] = React.useState();
  const [userRegistryItems, setUserRegistryItems] = React.useState();
  const [curUser, setCurUser] = React.useState();
  const pictureLinks = {
    unclaimed:"/openCircle.png",
    claimed:"/closedCircle.png",
    userClaimed:"/checkedImage.png"
    };

  React.useEffect(() => {
    if (curUser === undefined) return;
    setCurRegistryItems(localStorage.getItem(curUser + "'s registryItems"));
    setUserRegistryItems(localStorage.getItem(userName + " " + curUser + "'s registryItems")); // curUser TestUser's registryItems
    setCurClaimedStatus(localStorage.getItem(curUser + "'s claimedStatus"));
  }, [curUser]);

function parseRegistryItems(thingsToParse){
  if (curRegistryItems === undefined) return [];
    return thingsToParse.map(item => JSON.parse(item) || []);
}

function findUser(name){
  if (name === "" || name === userName) return;
  setCurUser(name);
}

function PopulateRegistryItems(){
    const itemList = [];
    var [items, claimedStatus, userItems] = parseRegistryItems([curRegistryItems, curClaimedStatus, userRegistryItems]);
    for (let i = 0; i < items.length; i++){
      var status = claimedStatus[i];
      if (userItems.length !== 0){
        if (userItems[i] === true){
          status = "userClaimed";
        }
      var pictureLink = pictureLinks[status] ? pictureLinks[status] : pictureLinks["unclaimed"];


      }
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

function RegistryItemsExist(){
  return curRegistryItems !== "" && curRegistryItems !== "undefined" && curRegistryItems !== undefined;
}

function RegistryItemsAreClaimed(){
  return curClaimedStatus !== "" && curClaimedStatus !== "undefined" && curClaimedStatus !== undefined;
}


  return (
    
    <main>
      <div>
        <form method="get">
          <div className="add-item">
            <input className="form-control" id="user-input" type="text" placeholder="Enter name here" />
            <button className="btn btn-primary" id="add-item-button" type="button" onClick={() => findUser(document.getElementById("user-input").value)}>Search</button>
          </div>
        </form>
      </div>

      {RegistryItemsExist() && (
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
        
        {RegistryItemsAreClaimed() && (
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