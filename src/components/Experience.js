import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('work');

  const educationData = [
    {
      logo: '../assets/img/ucsd.png',
      title: 'Masters of Science in Computer Science',
      institution: 'University of California, San Diego',
      details: 'GPA: 3.92/4.0',
      date: '2024 - 2026 (Expected)',
    },
    {
      logo: '../assets/img/srm.png',
      title: 'B.Tech - Computer Science and Engineering',
      institution: 'SRM Institute of Science and Technology, KTR Campus',
      details: 'CGPA: 9.56 (Final)',
      date: '2020 - 2024',
    },
  ];

  const workData = [
    {
      logo: '../assets/img/ucsd.png',
      title: 'Graduate Student Researcher',
      institution: 'UC San Diego Health • La Jolla, CA',
      details: [
        'Refactored 5k+ LOC MATLAB neuroimaging code into modular Python pipelines, reducing runtime by 20%.',
        'Applied scalable feature selection and nested cross-validation to 10k+ MRI scans, ensuring reproducibility.',
        'Developed predictive models (Logistic Regression, SVM) on structural/diffusion MRI using multi-modal data.',
        'Collaborated with neuroscientists to integrate mixed-effects models into production-ready research pipelines.',
      ],
      date: 'Jan 2025 - Present',
    },
    {
      logo: '../assets/img/iitb.png',
      title: 'Research Intern (IRCC)',
      institution: 'Indian Institute of Technology Bombay',
      details: [
        'Incorporated Computer Vision techniques for affective engagement to analyze peak emotions in 100+ participant interactions.',
        'Annotated over 30,000 video frames and utilized YOLOv8 for detecting cognitive engagement.',
      ],
      date: 'Jan 2024 - Jun 2024',
    },
    {
      logo: '../assets/img/wells.png',
      title: 'Intern Analyst (CEDA)',
      institution: 'Wells Fargo',
      details: [
        'Developed a Python-based data extraction tool using regex, text parsing, and NLP, reducing manual processing time by 70%.',
        'Applied LDA topic modeling on FHA Mortgage policies, achieving a 20% increase in classification accuracy.',
      ],
      date: 'Jun 2023 - Aug 2023',
    },
    {
      logo: '../assets/img/sam.png',
      title: 'Research Intern (PRISM)',
      institution: 'Samsung R&D Institute India-Bangalore',
      details: [
        'Conducted forecasting on a French bakery dataset, achieving a 15% reduction in forecasting errors using SARIMA, Holt-Winters, LSTM.',
        'Executed time series analysis exploring trends, seasonal effects, and confirmed data stationarity with ADF test.',
      ],
      date: 'Dec 2022 - Aug 2023',
    },
    {
      logo: '../assets/img/nus.png',
      title: 'Academic Intern',
      institution: 'National University of Singapore',
      details: [
        'Leveraged Spacy for Named Entity Recognition and Deep neural network to develop a robust Resume Parser, achieving 96% precision.',
        'Pioneered integration of cutting-edge Deep Learning optimization techniques; achieved a 10% increase in classification precision.',
      ],
      date: 'June 2022',
    },
  ];

  return (
    <section className="qualification section" id="experience" ref={ref}>
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <motion.span
        className="section__subtitle"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My journey in Academics & Professional Internships
      </motion.span>

      <div className="qualification__container container">
        <motion.div
          className="qualification__tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div
            className={`qualification__button button--flex ${activeTab === 'education' ? 'qualification__active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Academic
          </div>

          <div
            className={`qualification__button button--flex ${activeTab === 'work' ? 'qualification__active' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Professional
          </div>
        </motion.div>

        <div className="qualification__sections">
          {activeTab === 'education' && (
            <motion.div
              className="qualification__content qualification__active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  className="qualification__data"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="qualification__header">
                    <img src={item.logo} alt={item.institution} className="qualification__logo" loading="lazy" />
                    <div className="qualification__info">
                      <h3 className="qualification__title">{item.title}</h3>
                      <span className="qualification__subtitle">{item.institution}</span>
                      <div className="qualification__details">{item.details}</div>
                    </div>
                  </div>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    {item.date}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'work' && (
            <motion.div
              className="qualification__content qualification__active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {workData.map((item, index) => (
                <motion.div
                  key={index}
                  className="qualification__data"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="qualification__header">
                    <img src={item.logo} alt={item.institution} className="qualification__logo" loading="lazy" />
                    <div className="qualification__info">
                      <h3 className="qualification__title">{item.title}</h3>
                      <span className="qualification__subtitle">{item.institution}</span>
                    </div>
                  </div>
                  <div className="qualification__details">
                    {item.details.map((detail, i) => (
                      <div key={i} style={{ marginBottom: '0.5rem' }}>
                        • {detail}
                      </div>
                    ))}
                  </div>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    {item.date}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;

