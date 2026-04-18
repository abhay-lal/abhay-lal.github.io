import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = ({ data }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="page">
        <div className="section-head">
          <div className="section-num">§ 05 / STACK</div>
          <h2 className="section-title">Tools of the trade.</h2>
          <div className="section-meta">SELF-REPORTED</div>
        </div>
        <div className="skill-grid">
          {data.skills.map((cat, i) => (
            <div className="skill-col" key={cat.title}>
              <h4 className="skill-col-head">
                {String(i + 1).padStart(2, '0')} / {cat.title}
              </h4>
              <div className="skill-list">
                {cat.items.map(s => (
                  <div className="skill-item" key={s.n}>
                    <span className="skill-name">{s.n}</span>
                    <span className="skill-val">{s.p}</span>
                    <div
                      className="skill-bar"
                      style={{ '--p': visible ? s.p + '%' : '0%' }}
                    ></div>
                  </div>
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
