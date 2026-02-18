import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { MyRegistry } from './my-registry/my-registry';
import { ViewRegistry } from './view-registry/view-registry';
import { AuthState } from './login/authState';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
        <div className="body">
            <header>
                <h1>Registry</h1>
                <nav>
                    <menu className="header-menu">
                        <li><NavLink className="nav-link active" to="/">Home</NavLink></li>
/                        {authState === AuthState.Authenticated && (
                            <li><NavLink className="nav-link active" id="view-registry" to="/my-registry">View</NavLink></li>
                        )}
                        {authState === AuthState.Authenticated && (                                                
                            <li><NavLink className="nav-link active" id="view-other-registries" to="/view-registry">Other</NavLink></li>
                        )}

                        <li><NavLink className="nav-link active" to="/about">About</NavLink></li>
                    </menu>
                </nav>
            </header> 
            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/my-registry' element={<MyRegistry />} />
                <Route path='/view-registry' element={<ViewRegistry />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <footer>
                <p>Author Name: Seth Squires</p>
                <a className="nav-link active" id="github-link" href="https://github.com/Sdsquires27/startup">View GitHub</a>
            </footer>
        </div>
  </BrowserRouter>
  );
}
function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}