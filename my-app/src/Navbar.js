import React from 'react';
import { Link } from 'react-router-dom';
import pollo from './assets/a.jpeg';
import s from './assets/s.jpeg';
import p from './assets/o.svg';
import ps from './assets/favicon.ico';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
    <div>
      <img src={p} alt="sss"className="nav-linksLogo"/>
      <Link to="/" className="nav-links studio-link">KOLLABORATE STUDIO</Link>
    </div>

      
      <div>
        <Link to="/" className="nav-links">Discover</Link>
        <Link to="/about" className="nav-links">About us</Link>
        <Link to="/contact" className="nav-links">Team</Link>
        <Link to="/blog" className="nav-links">Blog</Link>
      </div>

      <div>
        <Link to="/login" className="nav-links login-button">Login</Link>
        <Link to="/register" className="nav-links"><img src={ps} alt="sss"className="nav-linksLogo"/></Link>
      </div>
    </nav>
  );
};

export default Navbar;

