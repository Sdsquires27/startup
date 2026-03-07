import React from 'react';
import { useNavigate } from 'react-router-dom';
import './authenticated.css';

export function Authenticated(properties){
    const navigate = useNavigate();

    function handleLogout(){
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        properties.onLogout();
      });
    }

    return (
        <div>
            <button className="btn btn-primary" id="play-button" onClick={() => navigate('/my-registry')}>
                View My Registry
            </button>
            <button className="btn btn-primary" id="play-button" onClick={() => navigate('/view-registry')}>
                View Other Registry
            </button>
            <button className="btn btn-secondary" onClick={() => handleLogout()}>
                Logout
            </button>
        </div>
    )
}
