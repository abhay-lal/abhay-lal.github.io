import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = ({ activeSection }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: 'uil-estate', label: 'Home' },
    { id: 'about', icon: 'uil-user', label: 'About' },
    { id: 'skills', icon: 'uil-chart-pie-alt', label: 'Skills' },
    { id: 'experience', icon: 'uil-briefcase-alt', label: 'Experience' },
    { id: 'portfolio', icon: 'uil-scenery', label: 'Projects' },
    { id: 'research', icon: 'uil-flask', label: 'Publications' },
    { id: 'contact', icon: 'uil-message', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setShowMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`header ${scrolled ? 'scroll-header' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="nav container">
        <a href="#home" className="nav__logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          <svg className="icon" width="15" height="15">
            <use xlinkHref="#hugeicons--artificial-intelligence-01"></use>
          </svg>
          Abhay Lal
        </a>

        <svg style={{ display: 'none' }}>
          <symbol id="hugeicons--artificial-intelligence-01" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 22v-.5c0-1.105.932-2 1.922-2.49c.963-.475 1.772-1.26 1.875-2.18L20 15l2-1l-2.5-3.75A8.25 8.25 0 0 0 12 2.033M6.5 16.996V22m0-5.004A8.3 8.3 0 0 1 4 14.19m2.5 2.806c.75.53 1.594.937 2.5 1.193M8 4H6c-.943 0-1.414 0-1.707.293S4 5.057 4 6v2c0 .943 0 1.414.293 1.707S5.057 10 6 10h2c.943 0 1.414 0 1.707-.293S10 8.943 10 8V6c0-.943 0-1.414-.293-1.707S8.943 4 8 4m-2.5 6v2m3-2v2m-3-10v2m3-2v2M4 5.5H2m2 3H2m10-3h-2m2 3h-2" color="currentColor" />
          </symbol>
        </svg>

        <AnimatePresence>
          {showMenu && (
            <motion.div
              className="nav__menu show-menu"
              initial={{ bottom: '-100%' }}
              animate={{ bottom: 0 }}
              exit={{ bottom: '-100%' }}
              transition={{ duration: 0.3 }}
            >
              <ul className="nav__list grid">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    className="nav__item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={`#${item.id}`}
                      className={`nav__link ${activeSection === item.id ? 'active-link' : ''}`}
                      onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                    >
                      <i className={`uil ${item.icon} nav__icon`}></i> {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <i
                className="uil uil-times nav__close"
                onClick={() => setShowMenu(false)}
                role="button"
                tabIndex="0"
              ></i>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="nav__menu-desktop">
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.id} className="nav__item">
                <a
                  href={`#${item.id}`}
                  className={`nav__link ${activeSection === item.id ? 'active-link' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__toggle" onClick={() => setShowMenu(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;

