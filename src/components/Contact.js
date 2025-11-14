import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="contact section" id="contact" ref={ref}>
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>
      <motion.span
        className="section__subtitle"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get in touch with me
      </motion.span>

      <div className="contact__container container grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="mailto:abhay.lal.cs@gmail.com" className="contact__link">
            <motion.div
              className="contact__information"
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <i className="uil uil-envelope contact__icon"></i>
              <div>
                <h3 className="contact__title">Email</h3>
                <span className="contact__subtitle">abhay.lal.cs@gmail.com</span>
              </div>
            </motion.div>
          </a>

          <motion.div
            className="contact__information"
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <i className="uil uil-map-marker contact__icon"></i>
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">San Diego, CA | USA</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <iframe
          src='https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25434862'
          frameBorder='0'
          width='75%'
          height='700'
          style={{ display: 'block', margin: '2rem auto 0' }}
          loading='lazy'
          title='LinkedIn posts widget'
        />
      </motion.div>
    </section>
  );
};

export default Contact;

