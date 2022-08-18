import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../media/eccicon.png';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="topnav">
      <img src={logo} className="topnav-logo" alt="ECC" />
      <NavLink className="topnav-link" to="/home">
        Home
      </NavLink>
      <NavLink className="topnav-link" to="/interestgroups">
        Interest Groups
      </NavLink>
      <NavLink className="topnav-link" to="/findadev">
        Find a Dev
      </NavLink>
      <NavLink className="topnav-link" to="/news">
        News
      </NavLink>
      <a
        className="topnav-link"
        href="https://hackexeter.com"
        target="_blank"
        rel="noreferrer"
      >
        HackExeter
      </a>
    </nav>
  );
}
