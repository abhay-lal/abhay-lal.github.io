import React from 'react';
import './Publications.css';

/* Visual identity per paper — topic color key + domain label */
const paperMeta = {
  "MusiCRS: Benchmarking Audio-Centric Conversational Recommendation": {
    domain: "Multimodal · Recommendation",
    color: "pub-color-violet",
    icon: "♫"
  },  "Hierarchical Vegetation Classification for Wildfire Risk Assessment using the National Data Platform": {
    domain: "Computer Vision · Ecology",
    color: "pub-color-green",
    icon: "🌲"
  },
  "Automated screening of hip X-rays for osteoporosis by Singh's Index using machine learning algorithms": {
    domain: "Healthcare AI · Medical Imaging",
    color: "pub-color-blue",
    icon: "⬡"
  },
  "Unsupervised Machine Learning for Osteoporosis Diagnosis Using Singh Index Clustering on Hip Radiographs": {
    domain: "Healthcare AI · Unsupervised ML",
    color: "pub-color-blue",
    icon: "⬡"
  },
  "Human gait recognition using cross-view micro-gait dataset with lightweight MobileNet": {
    domain: "Computer Vision · Biometrics",
    color: "pub-color-amber",
    icon: "◈"
  },
  "Gait speed based individual recognition model using deep 2-D convolutional neural network": {
    domain: "Computer Vision · Deep Learning",
    color: "pub-color-amber",
    icon: "◈"
  },
  "ALATS: Analysis of localization algorithms in terrestrial surveillance bots": {
    domain: "Robotics · Localization",
    color: "pub-color-rust",
    icon: "◎"
  }
};

const venueShort = (venue) => {
  if (venue.includes('ICASSP')) return 'ICASSP';
  if (venue.includes('arXiv')) return 'arXiv';
  if (venue.includes('IEEE')) return 'IEEE';
  if (venue.includes('ICPP')) return 'ICPP';
  if (venue.includes('Orthopaedics')) return 'Journal';
  return venue;
};

const Publications = ({ data }) => {
  return (
    <section className="section" id="publications">
      <div className="page">
          <div className="section-head">
          <h2 className="section-title">Research output.</h2>
          <div className="section-meta">{data.publications.length} PAPERS</div>
        </div>
        <div className="pub-grid">
          {data.publications.map((p, i) => {
            const meta = paperMeta[p.title] || { domain: "Research", color: "pub-color-default", icon: "○" };
            return (
              <a
                className="pub-card"
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Colored visual banner */}
                <div className={'pub-banner ' + meta.color}>
                  <div className="pub-banner-icon">{meta.icon}</div>
                  <div className="pub-banner-domain">{meta.domain}</div>
                  <div className="pub-banner-year">{p.year}</div>
                </div>

                {/* Card body */}
                <div className="pub-card-body">
                  <div className="pub-card-top">
                    <span className="pub-venue-badge">{venueShort(p.venue)}</span>
                    <span className={'pub-card-status' + (p.status === 'Preprint' ? ' preprint' : '')}>
                      {p.status}
                    </span>
                  </div>

                  <h3 className="pub-card-title">{p.title}</h3>

                  <p className="pub-card-authors">
                    {p.authors.split(',').map((a, j) => {
                      const trimmed = a.trim();
                      const isMe = trimmed.includes('Abhay Lal');
                      const isEqual = p.equalContrib && p.equalContrib.some(n => trimmed.includes(n));
                      return (
                        <span key={j}>
                          {j > 0 && <span className="pub-sep">, </span>}
                          <span className={isMe ? 'pub-me' : ''}>{trimmed}{isEqual ? <sup>*</sup> : ''}</span>
                        </span>
                      );
                    })}
                    {p.equalContrib && (
                      <span className="pub-equal-note"> &nbsp;*equal contribution</span>
                    )}
                  </p>

                  <div className="pub-card-footer">
                    <span className="pub-venue-ref">{p.venueRef}</span>
                    <span className="pub-read">Read →</span>
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

export default Publications;
