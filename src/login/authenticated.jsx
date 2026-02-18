import React from 'react';
import { useNavigate } from 'react-router-dom';
import './authenticated.css';

export function Authenticated(properties){
    const navigate = useNavigate();

    function handleLogout(){
        localStorage.removeItem('userName');
        properties.onLogout();
    }

    return (
        <div>
            <p>Welcome back {properties.userName}! The next holiday is [Holiday API Call], which is only [Days Until Holiday] away. Make the most of it!</p>
            <button className="btn btn-primary" id="play-button" onClick={() => navigate('/play')}>
                Play
            </button>
            <button className="btn btn-primary" onClick={() => handleLogout()}>
                Logout
            </button>
        </div>
    )
}
