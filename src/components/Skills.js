import React from 'react';
import './Skills.css';

const Skills = ({ data }) => {
  return (
    <section className="section" id="skills">
      <div className="page">
          <div className="section-head">
          <h2 className="section-title">Tools of the trade.</h2>
          <div className="section-meta">SELF-REPORTED</div>
        </div>
        <div className="skill-grid">
          {data.skills.map((cat, i) => (
            <div className="skill-col" key={cat.title}>
              <h4 className="skill-col-head">
                {String(i + 1).padStart(2, '0')} / {cat.title}
              </h4>
              <div className="skill-pills">
                {cat.items.map(name => (
                  <span className="skill-pill" key={name}>{name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
