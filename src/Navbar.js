import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';
import logo from './media/eccicon.png';

export default function Navbar() {
    return (
        <nav className='topnav'>
            <img src={logo} className='topnav-logo'/>
            <NavLink className='topnav-link' activeClassName='topnav-link-active' to="/home">Home</NavLink>
            <NavLink className='topnav-link' activeClassName='topnav-link-active' to="/interestgroups">Interest Groups</NavLink>
            <NavLink className='topnav-link' activeClassName='topnav-link-active' to="/findadev">Find a Dev</NavLink>
            <NavLink className='topnav-link' activeClassName='topnav-link-active' to="/news">News</NavLink>
            <a className='topnav-link' href="https://hackexeter.com" target="_blank" >HackExeter</a>
        </nav>
    )
}