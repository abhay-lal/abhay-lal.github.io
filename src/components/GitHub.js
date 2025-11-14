import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './GitHub.css';

const GitHub = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const username = 'abhay-lal';

  return (
    <section className="github section" id="github" ref={ref}>
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        GitHub Activity
      </motion.h2>
      <motion.span
        className="section__subtitle"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My coding journey
      </motion.span>

      <div className="github__container container">
        {/* GitHub Stats Cards */}
        <motion.div
          className="github__stats"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="github__stats-row">
            <motion.div
              className="github__stat-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=github_dark&hide_border=true&bg_color=1a1a1a&title_color=c0c0c0&icon_color=c0c0c0&text_color=d1d5db&ring_color=c0c0c0`}
                alt="GitHub Stats"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              className="github__stat-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=github_dark&hide_border=true&bg_color=1a1a1a&title_color=c0c0c0&text_color=d1d5db`}
                alt="Top Languages"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* GitHub Contribution Graph */}
        <motion.div
          className="github__contributions"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="github__contributions-title">Contribution Graph</h3>
          <motion.div
            className="github__graph"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github-compact&hide_border=true&bg_color=1a1a1a&color=c0c0c0&line=c0c0c0&point=e8e8e8&area=true&area_color=c0c0c0`}
              alt="GitHub Contribution Graph"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* GitHub Streak Stats */}
        <motion.div
          className="github__streak"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.div
            className="github__streak-card"
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=github-dark-blue&hide_border=true&background=1a1a1a&ring=c0c0c0&fire=c0c0c0&currStreakLabel=c0c0c0&sideLabels=d1d5db&currStreakNum=e8e8e8&dates=d1d5db&sideNums=e8e8e8`}
              alt="GitHub Streak Stats"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Link to GitHub Profile */}
        <motion.div
          className="github__cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button github__button"
          >
            View GitHub Profile
            <i className="uil uil-arrow-right button__icon"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHub;

