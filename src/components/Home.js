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
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home__social-icon"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className={link.icon}></i>
                      </motion.a>
                    ))}
                  </motion.div>

                  <motion.div
                    className="home__img home__tech-scene"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="tech-hud">
                      {/* Central Python Logo */}
                      <motion.div
                        className="hud-core"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <i className="fab fa-python"></i>
                      </motion.div>

                      {/* Circular Text */}
                      <motion.div
                        className="circular-text"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <svg viewBox="0 0 200 200" className="circular-text-svg">
                          <defs>
                            <path
                              id="circlePath"
                              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                            />
                          </defs>
                          <text className="circular-text-path">
                            <textPath href="#circlePath" startOffset="0%">
                              SOFTWARE ENGINEERING • AI • DATA SCIENCE • 
                            </textPath>
                          </text>
                        </svg>
                      </motion.div>

                      {/* Rotating Tech Stack Icons */}
                      <motion.div
                        className="tech-icons-ring"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 30,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        {[
                          { icon: 'fab fa-react', angle: 0 },
                          { icon: 'fab fa-node-js', angle: 40 },
                          { icon: 'fab fa-docker', angle: 80 },
                          { icon: 'fab fa-aws', angle: 120 },
                          { icon: 'fas fa-fire', angle: 160, label: 'PyTorch' },
                          { type: 'text', text: 'TF', angle: 200, label: 'TensorFlow' },
                          { icon: 'fab fa-git-alt', angle: 240 },
                          { icon: 'fab fa-linux', angle: 280 },
                          { icon: 'fab fa-js', angle: 320 },
                        ].map((tech, i) => (
                          <div
                            key={i}
                            className="tech-icon"
                            style={{
                              '--tech-angle': `${tech.angle}deg`,
                            }}
                          >
                            {tech.type === 'text' ? (
                              <motion.span
                                className="tech-text-icon"
                                animate={{
                                  rotate: 360,
                                }}
                                transition={{
                                  duration: 8,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                              >
                                {tech.text}
                              </motion.span>
                            ) : (
                              <motion.i
                                className={tech.icon}
                                animate={{
                                  rotate: 360,
                                }}
                                transition={{
                                  duration: 8,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                              />
                            )}
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>

          <motion.div
            className="home__data"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h1 className="home__title">
              Hi, I'm Abhay
            </h1>
            <h3 className="home__subtitle">
              AI Enthusiast
            </h3>
            <p className="home__description">
              AI/ML researcher and data scientist based in San Diego, CA (UC San Diego). I work on AI Safety, Neuroimaging, Healthcare AI, LLMs and multimodal machine learning, building robust systems from research to production.
            </p>
            <div className="home__buttons">
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
            </div>
          </motion.div>
        </div>

        <motion.div
          className="home__scroll"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
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

