import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './Theme';
import logo from '../assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="branding">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Blog Logo" className="logo" />
            <span className="site-title">Digital Chronicles</span>
          </Link>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
          
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </div>

        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>
    </header>
  );
};

export default Header;