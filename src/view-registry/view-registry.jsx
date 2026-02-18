import React from 'react';
import './view-registry.css'

export function ViewRegistry() {
  const [curRegistryItems, setCurRegistryItems] = React.useState();
  const [curClaimedStatus, setCurClaimedStatus] = React.useState();
  const [userRegistryItems, setUserRegistryItems] = React.useState();
  const [curUser, setCurUser] = React.useState();

  React.useEffect(() => {
    if (curUser === undefined) return;
    setCurRegistryItems(localStorage.getItem(curUser + "'s registryItems"));
    setUserRegistryItems(localStorage.getItem(localStorage.getItem('userName') + " " + curUser + "'s registryItems")); // curUser TestUser's registryItems
    setCurClaimedStatus(localStorage.getItem(curUser + "'s claimedStatus"));
  }, [curUser]);

function findUser(name){
  if (name === "") return;
  setCurUser(name);
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
            <tr>
              <td>
                Backpack
              </td>
              <td>
                <img src="/closedCircle.png" width="10" height="10"/>
              </td>
            </tr>
            <tr>
              <td>
                Chair
              </td>
              <td>
                <img src="/closedCircle.png" width="10" height="10"/>
              </td>
            </tr>
            <tr>
              <td>
                Mattress
              </td>
              <td>
                <img src="/checkedImage.png" width="10" height="10"/>
              </td>
            </tr>
            <tr>
              <td>
                Pen Set
              </td>
              <td>
                <img src="/openCircle.png" width="10" height="10"/>
              </td>
            </tr>
            <tr>
              <td>
                Stationary Bag
              </td>
              <td>
                <img src="/checkedImage.png" width="10" height="10"/>
              </td>
            </tr>
            </tbody>
          </table>

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
            <tr>
              <td>
                Mattress
              </td>
              <td>
                <img src="/trash.png" width="10" height="10"/>
              </td>
              <td>
                <img src="icon.png" width="10" height="10"/>
              </td>
            </tr>
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
            </tbody>
        </table>
      </div>
    </main>
  );
}