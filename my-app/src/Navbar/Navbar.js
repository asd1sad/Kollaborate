import React from 'react';
import { Link } from 'react-router-dom';
import p from '../assets/o.svg';
import ps from '../assets/favicon.ico';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-between text-center">
        <div className="row w-100 d-flex">
          <div className="col-lg-4 col-md-4 col-sm-12 okey">
            <img src={p} alt="sss" className="nav-linksLogo rr" />
            <Link to="/" className="nav-links studio-link">KOLLABORATE STUDIO</Link>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-8 barra2">
            <Link to="/" className="nav-links">Discover</Link>
            <Link to="/about" className="nav-links">About us</Link>
            <Link to="/contact" className="nav-links">Team</Link>
            <Link to="/blog" className="nav-links">Blog</Link>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 barra3">
            <Link to="/login" className="nav-links login-button">Login</Link>
            <Link to="/register" className="nav-links"><img src={ps} alt="sss" className="nav-linksLogo"/></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
