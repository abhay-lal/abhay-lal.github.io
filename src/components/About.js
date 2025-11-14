import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="about section" id="about" ref={ref}>
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h2>
      <motion.span
        className="section__subtitle"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My Introduction
      </motion.span>

      <div className="about__container container grid">
        <motion.img
          src="../assets/img/gemini-work.png"
          alt="Abhay working on his laptop"
          className="about__img"
          loading="lazy"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        />

        <motion.div
          className="about__data"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="about__description">
            With a relentless curiosity for solving real-world challenges through technology, I specialize in pushing the boundaries of machine learning and artificial intelligence. As a Master's student at the University of California, San Diego, I focus on creating impactful solutions in areas like computer vision, natural language processing, and generative AI. My professional journey spans roles at industry leaders such as Wells Fargo, Samsung R&D, and IIT Bombay, where I honed my skills in developing scalable AI systems, conducting groundbreaking research, and delivering measurable results. I am passionate about bridging the gap between theoretical innovation and practical application, contributing to advancements that shape the future of AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

