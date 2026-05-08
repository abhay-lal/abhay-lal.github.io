import React, { useState } from 'react';
import './Header.css';

const Nav = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="nav-inner page">
        <div className="nav-links">
          {sections.map((s, i) => (
            <a
              key={s.id}
              href={'#' + s.id}
              className={activeSection === s.id ? 'active' : ''}
            >
              <span className="nav-link-num">0{i + 1}</span>{s.label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <div className="nav-status">
            <span className="blink"></span>FULL-TIME · JUNE 2026
          </div>
          <button
            className={'nav-hamburger' + (menuOpen ? ' open' : '')}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="nav-mobile-menu">
          {sections.map((s, i) => (
            <a
              key={s.id}
              href={'#' + s.id}
              className={activeSection === s.id ? 'active' : ''}
              onClick={handleNavClick}
            >
              <span className="nav-link-num">0{i + 1}</span>{s.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
