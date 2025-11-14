import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { href: 'https://github.com/abhay-lal', icon: 'uil-github-alt', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/lal-abhay/', icon: 'uil-linkedin-alt', label: 'LinkedIn' },
    { href: 'https://x.com/abbylaal', icon: 'uil-twitter', label: 'Twitter' },
    { href: 'https://scholar.google.com/citations?user=TsTzc9AAAAAJ&hl=en&oi=ao', icon: 'ai ai-google-scholar', label: 'Google Scholar' },
  ];

  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="footer__title">Abhay</h1>
            <span className="footer__subtitle">
              Graduate at UC San Diego
              <br />
              (CSE Major)
            </span>
          </motion.div>

          <motion.ul
            className="footer__links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </motion.ul>

          <motion.div
            className="footer__socials"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={link.icon}></i>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <p className="footer__copy">
          &#169; 2025 Abhay Lal. All rights reserved. All images on this personal portfolio are generated using A.I tools.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

