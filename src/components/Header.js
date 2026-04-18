import React from 'react';
import './Header.css';

const Nav = ({ activeSection }) => {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

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
            <span className="blink"></span>AVAILABLE · SUMMER 2026
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
