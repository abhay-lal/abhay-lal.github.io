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
      title: 'Graduate Research Data Scientist',
      institution: 'UC San Diego Health • San Diego, CA',
      details: [
        'Refactored 5000+ lines of MATLAB neuroimaging code into modular Python ML pipelines for scalable experimentation.',
        'Processed 10K+ multimodal MRI scans integrating imaging, genetic, and environmental predictors for large-scale analysis.',
        'Built reproducible modeling pipelines across 5K+ participants using group-aware cross-validation and covariate correction.',
        'Trained Logistic Regression and SVM models combining 15+ multimodal feature sets for neuropsychiatric prediction.',
        'Applied SHAP explainability to quantify predictor importance, achieving 0.70 AUC with multimodal stacked classifiers.',
      ],
      date: 'Jan 2025 - Present',
    },
    {
      logo: '../assets/img/iitb.png',
      title: 'Intern',
      institution: 'Indian Institute of Technology Bombay • Mumbai, IN',
      details: [
        'Designed YOLOv8 and Docker computer vision pipelines on NVIDIA GPUs; processed 30k+ frames efficiently.',
        'Cut training time from 5 to 3 hrs/run; delivered REST microservices for real-time engagement signals.',
        'Analyzed 80k+ study-log entries with valence-arousal modeling to quantify engagement signals.',
      ],
      date: 'Jan 2024 - Jun 2024',
    },
    {
      logo: '../assets/img/wells.png',
      title: 'Intern',
      institution: 'Wells Fargo • Hyderabad, IN',
      details: [
        'Engineered scalable Python ETL pipelines using Pandas and SpaCy, processing 2,500+ FHA policy documents.',
        'Deployed LDA topic modeling microservice via FastAPI; achieved 0.78 coherence score for text analytics.',
        'Reduced manual review time from 4 hrs to 25 mins via regex-based topic tagging and structured analytics.',
      ],
      date: 'Jun 2023 - Aug 2023',
    },
    {
      logo: '../assets/img/sam.png',
      title: 'Intern',
      institution: 'Samsung R&D Institute • Bangalore, IN',
      details: [
        'Performed time-series EDA (decomposition, outliers, stationarity) on sales data across 12+ product lines.',
        'Built SARIMA and LSTM forecasting models with sliding-window validation; improved MAE by 15%.',
        'Awarded Certificate of Excellence plus $1200 PRISM reward for outstanding model performance.',
      ],
      date: 'Dec 2022 - Aug 2023',
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
                  className="qualification__flip-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="qualification__flip-card-inner">
                    <div className="qualification__flip-face qualification__flip-face--front">
                      <div className="qualification__header">
                        <img src={item.logo} alt={item.institution} className="qualification__logo" loading="lazy" />
                        <div className="qualification__info">
                          <h3 className="qualification__title">{item.title}</h3>
                          <span className="qualification__subtitle">{item.institution}</span>
                        </div>
                      </div>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                        {item.date}
                      </div>
                      <div className="qualification__flip-hint">Hover to view contributions</div>
                    </div>

                    <div className="qualification__flip-face qualification__flip-face--back">
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
                    </div>
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

