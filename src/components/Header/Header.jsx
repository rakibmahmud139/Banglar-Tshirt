/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/grandpa">Grandpa</Link>
            <Link to="/about">About</Link>
            <Link to="/contract">Contract us</Link>
            <Link to="/question">Interview Questions</Link>
        </nav>
    );
};

export default Header;