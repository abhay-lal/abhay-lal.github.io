import React, { useState } from 'react';
import './Experience.css';

const Experience = ({ data }) => {
  const [tab, setTab] = useState('work');
  const [openIdx, setOpenIdx] = useState(0);
  const rows = tab === 'work' ? data.experience : data.education;

  return (
    <section className="section" id="experience">
      <div className="page">
        <div className="section-head">
          <div className="section-num">§ 02 / EXPERIENCE</div>
          <h2 className="section-title">Where I've worked.</h2>
          <div className="section-meta">2020 → PRESENT</div>
        </div>
        <div className="exp-tabs">
          <button
            className={'exp-tab' + (tab === 'work' ? ' active' : '')}
            onClick={() => { setTab('work'); setOpenIdx(0); }}
          >
            Professional ({data.experience.length})
          </button>
          <button
            className={'exp-tab' + (tab === 'education' ? ' active' : '')}
            onClick={() => { setTab('education'); setOpenIdx(0); }}
          >
            Academic ({data.education.length})
          </button>
        </div>
        <div>
          {rows.map((r, i) => (
            <div
              key={r.role + i}
              className={'exp-row' + (openIdx === i ? ' open' : '')}
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            >
              <div className="exp-date">
                {r.date}
                {r.current && <span className="exp-current">●</span>}
              </div>
              <div className="exp-main">
                <h3 className="exp-role">{r.role}</h3>
                <div className="exp-org">{r.org} · {r.loc}</div>
              </div>
              <div className="exp-tags">
                {r.tags.map(t => <span key={t} className="exp-tag">{t}</span>)}
              </div>
              <div className="exp-chev">→</div>
              <div className="exp-detail">
                <ul>
                  {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
