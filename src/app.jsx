import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { MyRegistry } from './my-registry/my-registry';
import { ViewRegistry } from './view-registry/view-registry';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
        <div className="body bg-dark text-light">
            <header>
                <h1>Registry</h1>
                <nav>
                    <menu className="header-menu">
                        <li><a className="nav-link active" href="index.html">Home</a></li>
                        <li><a className="nav-link active" id="view-registry" href="my-registry.html">View</a></li>
                        <li><a className="nav-link active" id="view-other-regfistries" href="view-registry.html">Other</a></li>
                        <li><a className="nav-link active" href="about.html">About</a></li>
                    </menu>
                </nav>
            </header> 
            <main>App components will go here</main>
            <footer>
                <p>Author Name: Seth Squires</p>
                <a className="nav-link active" id="github-link" href="https://github.com/Sdsquires27/startup">View GitHub</a>
            </footer>
        </div>
  </BrowserRouter>
  );
}