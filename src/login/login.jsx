import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { AuthState } from './authState';
import { Authenticated } from './authenticated';

export function Login({ userName, authState, onAuthChange }) {
  return (
       <main className="container-fluid text-center">
        <hr/>
        <h2>Welcome to the Registry</h2>
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