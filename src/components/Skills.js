import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillsData = [
    {
      id: 'ai',
      icon: 'uil-brain',
      title: 'AI & Data Science',
      subtitle: '3+ Years Experience',
      skills: [
        { name: 'Computer Vision', percentage: 92 },
        { name: 'Natural Language Processing', percentage: 85 },
        { name: 'Generative AI', percentage: 60 },
        { name: 'Probability & Statistics', percentage: 85 },
      ],
    },
    {
      id: 'programming',
      icon: 'uil-brackets-curly',
      title: 'Programming',
      subtitle: '3+ Years Experience',
      skills: [
        { name: 'Python', percentage: 95 },
        { name: 'C & C++', percentage: 90 },
        { name: 'SQL', percentage: 85 },
      ],
    },
    {
      id: 'tools',
      icon: 'uil-wrench',
      title: 'Tools & Frameworks',
      subtitle: '2+ Years Experience',
      skills: [
        { name: 'PyTorch', percentage: 90 },
        { name: 'TensorFlow', percentage: 85 },
        { name: 'Docker', percentage: 80 },
        { name: 'Git', percentage: 90 },
      ],
    },
    {
      id: 'computing',
      icon: 'uil-cloud-computing',
      title: 'Cloud & Computing',
      subtitle: '1+ Years Experience',
      skills: [
        { name: 'AWS', percentage: 85 },
        { name: 'Distributed Computing', percentage: 90 },
        { name: 'Linux', percentage: 80 },
      ],
    },
  ];

  return (
    <section className="skills section" id="skills" ref={ref}>
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <motion.span
        className="section__subtitle"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My technical expertise
      </motion.span>

      <div className="skills__container container">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.id}
            className="skills__card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -10 }}
          >
            <div className="skills__card-header">
              <i className={`uil ${category.icon} skills__icon`}></i>
              <div className="skills__card-titles">
                <h3 className="skills__title">{category.title}</h3>
                <span className="skills__subtitle">{category.subtitle}</span>
              </div>
            </div>

            <div className="skills__list">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="skills__data"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 + skillIndex * 0.1 }}
                >
                  <div className="skills__titles">
                    <h3 className="skills__name">{skill.name}</h3>
                  </div>
                  <div className="skills__bar">
                    <motion.span
                      className="skills__percentage"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 + skillIndex * 0.1 }}
                    ></motion.span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

