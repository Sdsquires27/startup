import React from 'react';
import {MessageDialog} from './messageDialog';





export function Unauthenticated(properties) {
    const [userName, setUserName] = React.useState(properties.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);
    
    async function handleLogin(){
        localStorage.setItem('userName', userName);
        properties.onLogin(userName); // This will trigger login.css
    }

    async function createAccount(){
        localStorage.setItem('userName', userName);
        properties.onLogin(username);
    }
    return(
        <>
            <form method="get" action="view-registry">
                <div className="form">
                    <span>@</span>
                    <input type="email" className="form-control" placeholder="youremail@service.com" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="form">
                    <span>🔒</span>
                    <input type="password" className="form-control" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            <div className="mt-1 text-center">
                <button type="submit" id="login-button" className="btn btn-primary" onClick={() => handleLogin()} disabled={!userName || !password}>Login</button>
                <button type="submit" className="btn btn-primary" onClick={() => createAccount()} disabled={!userName || !password}>Create Account</button>
            </div>
            </form>
            <MessageDialog message={displayError} onHide={() => setDisplayError("There's been an error! Please try again")} />

        </>
    );
}