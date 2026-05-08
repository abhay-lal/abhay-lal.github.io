import React, { useState } from 'react';
import './Projects.css';

/* Topic banner color per project */
const projectMeta = {
  "Visper":              { color: "pj-violet", label: "RAG · Voice · Accessibility" },
  "AI Safety Protocol":  { color: "pj-red",    label: "LLM Safety · Guardrails" },
  "Fire-Ready Forests":  { color: "pj-green",  label: "Ensembles · CV · NDP" },
  "MusiCRS":             { color: "pj-violet",  label: "Multimodal · Benchmark" },
  "TinyML Owl":          { color: "pj-teal",   label: "Edge AI · Embedded" },
  "BlogPod":             { color: "pj-amber",  label: "LLM · Prompting" },
  "Alveoli":             { color: "pj-blue",   label: "Medical Imaging · CV" },
  "Asset Bubble":        { color: "pj-amber",  label: "Forecasting · FinTech" },
  "ResPas":              { color: "pj-teal",   label: "NLP · Classification" },
};

const Projects = ({ data }) => {
  const [filter, setFilter] = useState('all');
  const tags = ['all', '2025', '2024', '2023', '2022'];
  const shown = filter === 'all' ? data.projects : data.projects.filter(p => p.year === filter);

  return (
    <section className="section" id="projects">
      <div className="page">
          <div className="section-head">
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
          {shown.map((p) => {
            const meta = projectMeta[p.title] || { color: 'pj-default', label: p.tags[0] };
            return (
              <a
                key={p.title}
                href={p.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-card"
              >
                {/* Visual banner */}
                <div className={'proj-banner ' + meta.color}>
                  <span className="proj-banner-label">{meta.label}</span>
                  <span className="proj-banner-year">{p.year}</span>
                  {p.award && (
                    <span className="proj-banner-badge">{p.award}</span>
                  )}
                </div>

                {/* Body */}
                <div className="proj-body">
                  <div className="proj-head">
                    <h3 className="proj-title">{p.title}</h3>
                  </div>
                  <div className="proj-sub mono">{p.sub}</div>
                  <p className="proj-desc">{p.desc}</p>
                  <div className="proj-footer">
                    <div className="proj-tags">
                      {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
                    </div>
                    {p.link && <span className="proj-link">View →</span>}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
