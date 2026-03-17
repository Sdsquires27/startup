  import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { AuthState } from './authState';
import { Authenticated } from './authenticated';

export function Login({ userName, authState, onAuthChange }) {
const [Holiday, setHoliday] = React.useState('[Holiday Name]');
const [DaysUntilHoliday, setDaysUntilHoliday] = React.useState('[Days Until Holiday]');

React.useEffect(() => {
  var nextHoliday;

  fetch(`https://date.nager.at/api/v3/NextPublicHolidays/US`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].date);
      const today = new Date();
      const nextHoliday = new Date(data[0].date);
      const datesDiff = Math.ceil((nextHoliday - today) / (1000 * 60 * 60 * 24)); // converts from milliseconds to days    
      setHoliday(data[0].name);
      setDaysUntilHoliday(datesDiff);
    })
    .catch();
}, []);
  return (
       <main className="container-fluid text-center">
        <hr/>
        <h2>Welcome to the Registry</h2>
        {authState === AuthState.Authenticated && (
            <p>Welcome back {userName}! The next holiday is {Holiday}, which is only {DaysUntilHoliday} days away. Make the most of it!</p>)}
        {authState === AuthState.Unauthenticated && (
            <p>The next holiday is {Holiday}, which is only {DaysUntilHoliday} days away. Make the most of it!</p>)}
        {authState === AuthState.Authenticated && (
            <Authenticated
                userName={userName}
                onLogout={() => {
                    onAuthChange(userName, AuthState.Unauthenticated);
                }}/>
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
        <hr />
    </main>
  );
}