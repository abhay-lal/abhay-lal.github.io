import React from 'react';
import './About.css';

const About = ({ data }) => {
  return (
    <section className="section" id="about">
      <div className="page">
        <div className="section-head">
          <div className="section-num">§ 01 / ABOUT</div>
          <h2 className="section-title">A quick intro.</h2>
          <div className="section-meta">abhay.lal.cs@gmail.com</div>
        </div>
        <div className="about-grid">
          <div className="about-label mono">
            Statement<br />of purpose<br />
            <span className="about-label-count">01 / 01</span>
          </div>
          <div className="about-body">
            <p className="about-lead">{data.about.lead}</p>
            <p className="about-copy">{data.about.body}</p>
          </div>
          <div className="about-side">
            <div className="kv">
              <span className="kv-k">Now</span>
              <span className="kv-v">UCSD Health · Research DS</span>
            </div>
            <div className="kv">
              <span className="kv-k">Prior</span>
              <span className="kv-v">IIT Bombay · Wells Fargo · Samsung</span>
            </div>
            <div className="kv">
              <span className="kv-k">Tools</span>
              <span className="kv-v">Python · PyTorch · FastAPI · AWS</span>
            </div>
            <div className="kv">
              <span className="kv-k">Writing</span>
              <span className="kv-v">arXiv · IEEE · ICPP</span>
            </div>
            <div className="focus-label">Focus Areas</div>
            <div className="focus-row">
              {data.about.focus.map(f => (
                <span className="focus-pill" key={f}>{f}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
