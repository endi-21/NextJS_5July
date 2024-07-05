import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/instaLogo.png'; 

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="Logo" style={{ height: '40px' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/searchPage" className="nav-link">Search</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
