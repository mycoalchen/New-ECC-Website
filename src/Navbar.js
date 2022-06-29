import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='topnav'>
            <Link className='topnav-link' to="/about">About</Link>
            <Link className='topnav-link' to="/interestgroups">Interest Groups</Link>
            <Link className='topnav-link' to="/findadev">Find a Dev</Link>
            <Link className='topnav-link' to="/news">News</Link>
        </nav>
    )
}