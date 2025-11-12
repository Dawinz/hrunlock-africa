import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../main.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img 
                src="/images/cropped-HRUNLOCK-Tab-icon-32x32.png" 
                alt="HRUNLOCK Africa" 
                className="logo-icon"
              />
              HRUNLOCK <span className="logo-accent">Africa</span>
            </Link>
          </div>
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`} id="nav">
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
              About
            </Link>
            <div className="nav-dropdown">
              <span className="nav-link">
                Services
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className="dropdown-menu">
                <Link to="/research" className="dropdown-item">Research</Link>
                <Link to="/events" className="dropdown-item">Events</Link>
                <Link to="/journals" className="dropdown-item">Journals</Link>
              </div>
            </div>
            <Link to="/learning" className={`nav-link ${isActive('/learning') ? 'active' : ''}`}>
              Online Learning
            </Link>
            <Link to="/journals" className={`nav-link ${isActive('/journals') ? 'active' : ''}`}>
              Journals
            </Link>
            <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>
              Gallery
            </Link>
            <Link to="/customers" className={`nav-link ${isActive('/customers') ? 'active' : ''}`}>
              Clients
            </Link>
            <Link to="/contact" className={`nav-link nav-cta ${isActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>
          </nav>
          <button 
            className="mobile-menu-toggle" 
            id="mobileMenuToggle" 
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

