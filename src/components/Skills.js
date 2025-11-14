import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openSkills, setOpenSkills] = useState({});

  const skillsData = [
    {
      id: 'ai',
      icon: 'uil-brain',
      title: 'AI & Data Science',
      subtitle: '3+ Years XP',
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
      subtitle: '3+ Years XP',
      skills: [
        { name: 'Python', percentage: 95 },
        { name: 'C & C++', percentage: 90 },
      ],
    },
    {
      id: 'computing',
      icon: 'uil-cloud-computing',
      title: 'Computing',
      subtitle: '1+ Years XP',
      skills: [
        { name: 'AWS', percentage: 85 },
        { name: 'Distributed Computing', percentage: 90 },
      ],
    },
    {
      id: 'misc',
      icon: 'uil-analysis',
      title: 'Misc',
      subtitle: '2+ Years XP',
      skills: [
        { name: 'Git', percentage: 90 },
        { name: 'Linux', percentage: 80 },
      ],
    },
  ];

  const toggleSkill = (id) => {
    setOpenSkills((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
        My technical & miscellaneous skills
      </motion.span>

      <div className="skills__container container grid">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`skills__content ${openSkills[category.id] ? 'skills__open' : 'skills__close'}`}>
              <div className="skills__header" onClick={() => toggleSkill(category.id)}>
                <i className={`uil ${category.icon} skills__icon`}></i>
                <div>
                  <h1 className="skills__title">{category.title}</h1>
                  <span className="skills__subtitle">{category.subtitle}</span>
                </div>
                <motion.i
                  className="uil uil-angle-down skills__arrow"
                  animate={{ rotate: openSkills[category.id] ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.i>
              </div>

              <AnimatePresence>
                {openSkills[category.id] && (
                  <motion.div
                    className="skills__list grid"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="skills__data"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                      >
                        <div className="skills__titles">
                          <h3 className="skills__name">{skill.name}</h3>
                        </div>
                        <div className="skills__bar">
                          <motion.span
                            className="skills__percentage"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.percentage}%` }}
                            transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                          ></motion.span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

