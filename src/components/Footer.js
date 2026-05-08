import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [policyOpen, setPolicyOpen] = useState(false);

  return (
    <footer className="foot">
      <div className="page">
        <div className="foot-inner">
          <span className="foot-copy">© 2026 Abhay Lal</span>

          <span className="foot-built">
            Built with{' '}
            <a href="https://cursor.com" target="_blank" rel="noopener noreferrer">Cursor</a>
            {' '}·{' '}
            <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude</a>
            {' '}· React
          </span>

          <div className="foot-links">
            <a href="/robots.txt" target="_blank" rel="noopener noreferrer">robots.txt</a>
            <button
              className="foot-policy-btn"
              onClick={() => setPolicyOpen(o => !o)}
            >
              AI Policy
            </button>
          </div>
        </div>

        {policyOpen && (
          <div className="foot-policy">
            <div className="foot-policy-grid">
              <div className="foot-policy-item">
                <span className="foot-policy-label">AI tools used</span>
                <span className="foot-policy-val">
                  This portfolio was built using Cursor IDE and Claude Code as primary development tools —
                  consistent with the Forward Deployed Engineer work on my resume.
                </span>
              </div>
              <div className="foot-policy-item">
                <span className="foot-policy-label">AI search indexing</span>
                <span className="foot-policy-val">
                  Permitted. GPTBot, Claude-Web, PerplexityBot, and other AI search crawlers may index
                  this site for search and retrieval purposes.
                </span>
              </div>
              <div className="foot-policy-item">
                <span className="foot-policy-label">AI training data</span>
                <span className="foot-policy-val">
                  Not permitted. Content on this site may not be scraped or used in model training
                  datasets without explicit written permission.
                </span>
              </div>
              <div className="foot-policy-item">
                <span className="foot-policy-label">Contact scraping</span>
                <span className="foot-policy-val">
                  Email and contact information may not be harvested by automated tools.
                  See <a href="/robots.txt">robots.txt</a> for crawler directives.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
