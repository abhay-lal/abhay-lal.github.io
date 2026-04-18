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
              Graduate Research Data Scientist at UC San Diego Health. I work at the seam where research meets production — MRI pipelines, multimodal LLMs, guardrails for agents, and the occasional TinyML deployment.
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
            </div>
          </div>
          <aside className="hero-aside">
            <div className="hero-aside-big">
              7<span className="hero-aside-dot">·</span>
            </div>
            <div>PEER-REVIEWED</div>
            <div>PUBLICATIONS</div>
            <div className="hero-aside-rule">— — —</div>
            <div className="hero-aside-stats">
              4 industry roles<br />
              13+ projects<br />
              2 hackathon wins
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
