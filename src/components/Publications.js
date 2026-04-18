import React from 'react';
import './Publications.css';

const Publications = ({ data }) => {
  return (
    <section className="section" id="publications">
      <div className="page">
        <div className="section-head">
          <div className="section-num">§ 04 / PUBLICATIONS</div>
          <h2 className="section-title">Research output.</h2>
          <div className="section-meta">{data.publications.length} PAPERS</div>
        </div>
        <div className="pub-list">
          {data.publications.map((p, i) => (
            <div className="pub-row" key={i}>
              <div className="pub-year">'{p.year.slice(2)}</div>
              <div>
                <h3 className="pub-title">{p.title}</h3>
                <div className="pub-authors">
                  {p.authors.split(',').map((a, j) => {
                    const trimmed = a.trim();
                    const isMe = trimmed.includes('Abhay Lal');
                    return (
                      <span key={j}>
                        {j > 0 ? ', ' : ''}
                        <span className={isMe ? 'pub-me' : ''}>{trimmed}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="pub-venue">
                <span className="pub-venue-name">{p.venue}</span>
                {p.venueRef}
                <div>
                  <span className={'pub-status' + (p.status === 'Preprint' ? ' preprint' : '')}>
                    {p.status}
                  </span>
                </div>
              </div>
              <a className="pub-link" href={p.link} target="_blank" rel="noopener noreferrer">
                Read<br />paper →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
