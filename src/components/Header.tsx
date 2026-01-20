'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'programs', label: 'Programs' },
    { id: 'events', label: 'Events' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'join', label: 'Join Us', isButton: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'programs', 'events', 'gallery', 'join'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <div className="logo-img">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="23" fill="#1B5E20" stroke="#FFD600" strokeWidth="2"/>
              <path d="M25 10L30 20L40 22L32 30L33 40L25 35L17 40L18 30L10 22L20 20L25 10Z" fill="#FFD600"/>
              <circle cx="25" cy="25" r="8" fill="#1B5E20"/>
            </svg>
          </div>
          <div className="logo-text">
            <h1>Samatat Open Scout Group</h1>
            <span>Youth Development • Leadership • Community Service</span>
          </div>
        </div>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                {link.isButton ? (
                  <Link 
                    href={`#${link.id}`}
                    className={`btn btn-primary ${activeSection === link.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(link.id)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link 
                    href={`#${link.id}`}
                    className={activeSection === link.id ? 'active' : ''}
                    onClick={() => handleNavClick(link.id)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <style jsx>{`
        .header {
          background-color: var(--white);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        
        .logo-text h1 {
          font-size: 1.5rem;
          margin-bottom: 0;
          line-height: 1.2;
        }
        
        .logo-text span {
          font-size: 0.9rem;
          color: var(--dark-gray);
          font-weight: 500;
        }
        
        .main-nav ul {
          display: flex;
          list-style: none;
          gap: 30px;
          margin: 0;
          padding: 0;
        }
        
        .main-nav a {
          text-decoration: none;
          color: var(--text-dark);
          font-weight: 500;
          font-size: 1rem;
          transition: color 0.3s;
          position: relative;
        }
        
        .main-nav a:hover {
          color: var(--primary-green);
        }
        
        .main-nav a.active {
          color: var(--primary-green);
        }
        
        .main-nav a.active:not(.btn)::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: var(--secondary-yellow);
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--primary-green);
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .main-nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--white);
            padding: 20px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
          }
          
          .main-nav.active {
            display: block;
          }
          
          .main-nav ul {
            flex-direction: column;
            gap: 15px;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
        
        @media (max-width: 576px) {
          .header-container {
            padding: 15px;
          }
          
          .logo-text h1 {
            font-size: 1.3rem;
          }
          
          .logo-text span {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;