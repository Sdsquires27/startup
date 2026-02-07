import React from 'react';
import './view-registry.css'

export function ViewRegistry() {
  return (
    <main>
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