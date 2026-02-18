import React from 'react';
import './login.css';

import { Unauthenticated } from './unauthenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
       <main className="container-fluid text-center">
        <hr/>
        <h2>Welcome to the Registry</h2>
        <p>The next holiday is [Holiday API Call], which is only [Days Until Holiday] away. Make the most of it!</p>
        {authState === AuthState.Authenticated && (<p> Welcome back {userName}</p>)}
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