"use client";
import { useState } from 'react';
import { NAV_ITEMS } from '../constants/navItems';

import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo or Name */}
          <Link href="/" className="logo">
            <span className="first-name">John</span>
            <span className="last-name">Doe</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link href={item.url} className="nav-link">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button 
            className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile Navigation */}
          <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url} 
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;