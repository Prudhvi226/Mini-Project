// Navbar.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavbarPage.css';

const Navbar = () => {
  const location = useLocation();
  const currentPage = location.pathname.slice(1); // Extract current page from URL

  // Function to check if the current page is the homepage, about, contact, or get started page
  const isHomePage = currentPage === '' || currentPage === 'about' || currentPage === 'contact' || currentPage === 'getstarted';

  // Function to render the campus links based on the current page
  const renderCampusLinks = () => {
    switch (currentPage) {
      case 'vit':
        return (
          <>
            <Link to="/svecw" className="navbar-menu-item">SVECW</Link>
            <Link to="/dental" className="navbar-menu-item">Dental</Link>
            <Link to="/degree" className="navbar-menu-item">Degree</Link>
            <Link to="/diploma" className="navbar-menu-item">Diploma</Link>
            <Link to="/" className="navbar-menu-item">Home</Link>
          </>
        );
      case 'svecw':
        return (
          <>
            <Link to="/vit" className="navbar-menu-item">VIT</Link>
            <Link to="/dental" className="navbar-menu-item">Dental</Link>
            <Link to="/degree" className="navbar-menu-item">Degree</Link>
            <Link to="/diploma" className="navbar-menu-item">Diploma</Link>
            <Link to="/" className="navbar-menu-item">Home</Link>
          </>
        );
      case 'dental':
        return (
          <>
            <Link to="/vit" className="navbar-menu-item">VIT</Link>
            <Link to="/svecw" className="navbar-menu-item">SVECW</Link>
            <Link to="/degree" className="navbar-menu-item">Degree</Link>
            <Link to="/diploma" className="navbar-menu-item">Diploma</Link>
            <Link to="/" className="navbar-menu-item">Home</Link>
          </>
        );
      case 'degree':
        return (
          <>
            <Link to="/vit" className="navbar-menu-item">VIT</Link>
            <Link to="/svecw" className="navbar-menu-item">SVECW</Link>
            <Link to="/dental" className="navbar-menu-item">Dental</Link>
            <Link to="/diploma" className="navbar-menu-item">Diploma</Link>
            <Link to="/" className="navbar-menu-item">Home</Link>
          </>
        );
      case 'diploma':
        return (
          <>
            <Link to="/vit" className="navbar-menu-item">VIT</Link>
            <Link to="/svecw" className="navbar-menu-item">SVECW</Link>
            <Link to="/dental" className="navbar-menu-item">Dental</Link>
            <Link to="/degree" className="navbar-menu-item">Degree</Link>
            <Link to="/" className="navbar-menu-item">Home</Link>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar-logo">BudgEAT</div>
      <div className="navbar-menu">
        {/* Render home, about, and contact on the homepage, about, contact, and get started page */}
        {(isHomePage || currentPage === 'about' || currentPage === 'contact' || currentPage === 'getstarted') && (
          <>
            <Link to="/" className="navbar-menu-item">Home</Link>
            <Link to="/about" className="navbar-menu-item">About</Link>
            <Link to="/contact" className="navbar-menu-item">Contact</Link>
          </>
        )}
        {/* Render campus links if not on the homepage, about, contact, or get started page */}
        {!isHomePage && currentPage !== 'about' && currentPage !== 'contact' && currentPage !== 'getstarted' && (
          renderCampusLinks()
        )}
      </div>
    </div>
  );
};

export default Navbar;
