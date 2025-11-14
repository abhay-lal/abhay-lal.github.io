import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Home.css';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/lal-abhay/', icon: 'uil-linkedin-alt', label: 'LinkedIn' },
    { href: 'https://github.com/abhay-lal', icon: 'uil-github-alt', label: 'GitHub' },
    { href: 'https://x.com/abbylaal', icon: 'uil-twitter', label: 'Twitter' },
    { href: 'https://scholar.google.com/citations?user=TsTzc9AAAAAJ&hl=en&oi=ao', icon: 'ai ai-google-scholar', label: 'Google Scholar' },
  ];

  return (
    <section className="home section" id="home" ref={ref}>
      <div className="home__container container grid">
        <div className="home__content grid">
          <motion.div
            className="home__social"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="home__social-icon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <i className={link.icon}></i>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="home__img"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
              <title>Abhay Lal portrait</title>
              <defs>
                <linearGradient id="silver-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#a8a8a8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#c0c0c0', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#d4d4d4', stopOpacity: 1 }} />
                </linearGradient>
                <clipPath id="circleClip">
                  <circle cx="90" cy="90" r="78" />
                </clipPath>
              </defs>
              <circle cx="90" cy="90" r="78" fill="url(#silver-gradient)" />
              <image
                className="home__blob-img"
                x="6.5"
                y="0"
                width="187"
                height="187"
                xlinkHref="../assets/img/abhay_new.png"
                clipPath="url(#circleClip)"
              />
            </svg>
          </motion.div>

          <motion.div
            className="home__data"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h1
              className="home__title"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Hi, I'm Abhay
            </motion.h1>
            <motion.h3
              className="home__subtitle"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              AI Enthusiast
            </motion.h3>
            <motion.p
              className="home__description"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              AI/ML researcher and data scientist based in San Diego, CA (UC San Diego). I work on AI Safety, Neuroimaging, Healthcare AI, LLMs and multimodal machine learning, building robust systems from research to production.
            </motion.p>
            <motion.div
              className="home__buttons"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a href="#contact" className="button button--flex">
                Contact <i className="uil uil-message button__icon"></i>
              </a>
              <a
                href="https://drive.google.com/file/d/1rwsAUzQDcaUS09s8ajCAgt9r3eT1iuBv/view?usp=sharing"
                className="button button--flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume <i className="uil uil-file button__icon"></i>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="home__scroll"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name">Scroll down</span>
            <motion.i
              className="uil uil-arrow-down home__scroll-arrow"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            ></motion.i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

