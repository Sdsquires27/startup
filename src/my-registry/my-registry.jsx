import React from 'react';
import './my-registry.css';

export function MyRegistry() {
  return (
    <main>
        <hr />
        <table className="table table-striped table-light table-bordered">
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
            <tr>
              <td>
                Backpack
              </td>
              <td>
                <img src="trash.png" width="10" height="10"/>
              </td>
            </tr>
            <tr>
              <td>
                Chair
              </td>
              <td>
                <img src="trash.png" width="10" height="10"/>
              </td>
            </tr>
            <tr>
              <td>
                Mattress
              </td>
              <td>
                <img src="trash.png" width="10" height="10"/>
              </td>
            </tr>
            <tr>
              <td>
                Pen Set
              </td>
              <td>
                <img src="trash.png" width="10" height="10"/>
              </td>
            </tr>
            <tr>
              <td>
                Stationary Bag
              </td>
              <td>
                <img src="trash.png" width="10" height="10"/>
              </td>
            </tr>
            </tbody>
          </table>
          <form method="get">
            <div className ="add-item">
              <input className="form-control" id="item-input" type="text" placeholder="Add item..." />
              <button className="btn btn-primary" id="add-item-button" type="submit">Add</button>
            </div>
          </form>
        <hr />
        </main>
  );
}