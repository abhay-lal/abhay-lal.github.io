import React, { useState } from 'react';
import './Projects.css';

const vizVariant = (i) => ['viz-a', 'viz-b', 'viz-c', 'viz-accent', 'viz-a', 'viz-c', 'viz-b', 'viz-a'][i % 8];

const Projects = ({ data }) => {
  const [filter, setFilter] = useState('all');
  const tags = ['all', '2025', '2024', '2023'];
  const shown = filter === 'all' ? data.projects : data.projects.filter(p => p.year === filter);

  return (
    <section className="section" id="projects">
      <div className="page">
        <div className="section-head">
          <div className="section-num">§ 03 / PROJECTS</div>
          <h2 className="section-title">Selected work.</h2>
          <div className="section-meta">
            {data.projects.length} SELECTED · +{Math.max(0, 13 - data.projects.length)} MORE ON GITHUB
          </div>
        </div>
        <div className="exp-tabs proj-filter">
          {tags.map(t => (
            <button
              key={t}
              className={'exp-tab' + (filter === t ? ' active' : '')}
              onClick={() => setFilter(t)}
            >
              {t === 'all' ? 'All' : t}
            </button>
          ))}
        </div>
        <div className="proj-grid">
          {shown.map((p, i) => (
            <a
              key={p.title}
              href={p.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={'proj-card ' + p.size}
            >
              <div className={'proj-viz ' + vizVariant(i)}>
                <div className="viz-stripes"></div>
                <div className="viz-label">{p.tags[0]} · {p.year}</div>
                <div className="viz-bignum">{String(i + 1).padStart(2, '0')}</div>
              </div>
              <div className="proj-body">
                <div className="proj-head">
                  <h3 className="proj-title">{p.title}</h3>
                  <span className="proj-idx">P.{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="proj-sub mono">{p.sub}</div>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
                </div>
                {p.link && <span className="proj-link">View repository →</span>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
