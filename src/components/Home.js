import React from 'react';
import './Home.css';

const Hero = ({ data }) => {
  return (
    <section className="hero" id="top">
      <div className="page">
        <div className="hero-grid">
          <div>
            <h1 className="hero-title">
              Abhay Lal<span className="hero-accent">.</span><br />
              <span className="hero-thin">Building AI —</span><br />
              <span className="hero-thin">from research</span><br />
              <span className="hero-thin">to</span>{' '}
              <em className="hero-em">production</em><span className="hero-accent">.</span>
            </h1>
            <p className="hero-sub">
              Applied AI Engineer — currently Forward Deployed at a stealth AI startup in SF. I design and ship end-to-end intelligent systems: LLM guardrails, agentic pipelines, clinical ML, and edge deployments. MS CS (AI) at UC San Diego.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#contact">
                Get in touch <span className="btn-arr">↗</span>
              </a>
              <a className="btn" href={data.meta.links.resume} target="_blank" rel="noopener noreferrer">
                Résumé <span className="btn-arr">↗</span>
              </a>
              <a className="btn" href={data.meta.links.scholar} target="_blank" rel="noopener noreferrer">
                Scholar <span className="btn-arr">↗</span>
              </a>
              <a className="btn" href={data.meta.links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <span className="btn-arr">↗</span>
              </a>
              <a className="btn" href={data.meta.links.github} target="_blank" rel="noopener noreferrer">
                GitHub <span className="btn-arr">↗</span>
              </a>
            </div>
          </div>
          <aside className="hero-aside">
            <div className="hero-photo-wrap">
              <img
                src="/assets/img/abhay_halftone.png"
                alt="Abhay Lal"
                className="hero-photo"
              />
            </div>
            <div className="hero-aside-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">7<span className="hero-accent">·</span></span>
                <span className="hero-stat-label">Publications</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">5<span className="hero-accent">·</span></span>
                <span className="hero-stat-label">Industry roles</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">4<span className="hero-accent">·</span></span>
                <span className="hero-stat-label">Hackathon wins</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
