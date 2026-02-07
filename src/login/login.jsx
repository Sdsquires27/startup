import React from 'react';
import './login.css';

export function Login() {
  return (
       <main className="container-fluid text-center">
        <hr/>
        <h2>Welcome to the Registry</h2>
        <p>The next holiday is [Holiday API Call], which is only [Days Until Holiday] away. Make the most of it!</p>
            <form method="get" action="view-registry">
                <div className="form">
                    <span>@</span>
                    <input type="email" className="form-control" placeholder="youremail@service.com" />
                </div>
                <div className="form">
                    <span>🔒</span>
                    <input type="password" className="form-control" placeholder="password" />
                </div>
            <div className="mt-1 text-center">
                <button type="submit" id="login-button" className="btn btn-primary">Login</button>
                <button type="submit" className="btn btn-primary">Create Account</button>
            </div>
            </form>
        <hr />
    </main>
  );
}