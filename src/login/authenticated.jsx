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
            <button className="btn btn-primary" id="play-button" onClick={() => navigate('/play')}>
                Play
            </button>
            <button className="btn btn-primary" onClick={() => handleLogout()}>
                Logout
            </button>
        </div>
    )
}
