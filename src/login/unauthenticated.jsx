import React from 'react';
import {MessageDialog} from './messageDialog';
import './unauthenticated.css';





export function Unauthenticated(properties) {
    const [userName, setUserName] = React.useState(properties.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);
    
    async function handleLogin()
    {
        loginOrCreate(`/api/auth/login`);
    }

    async function createAccount()
    {
        loginOrCreate(`/api/auth/create`);
    }

    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ email: userName, password: password }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        });
        if (response?.status === 200) 
        {
            localStorage.setItem('userName', userName);
            properties.onLogin(userName);
        } 
        else 
        {
            const body = await response.json();
            setDisplayError(`Error: ${body.msg}`);
        }
  }
    return(
        <>        
            <form method="get" action="view-registry">
                <div className="form">
                    <span>@</span>
                    <input type="username" className="form-control" placeholder="youremail@service.com" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="form">
                    <span>🔒</span>
                    <input type="password" className="form-control" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            <div className="mt-1 text-center">
                <button type="button" id="login-button" className="btn btn-primary" onClick={() => handleLogin()} disabled={!userName || !password}>Login</button>
                <button type="button" className="btn btn-primary" onClick={() => createAccount()} disabled={!userName || !password}>Create Account</button>
            </div>
            </form>
            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />

        </>
    );
}