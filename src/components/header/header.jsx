import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <h1>Star Wars Base</h1>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">People</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/planets">Planets</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/starships">Starships</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;