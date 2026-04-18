import React from 'react';
import './Contact.css';

const Contact = ({ data }) => {
  return (
    <section className="section" id="contact">
      <div className="page">
        <div className="section-head">
          <div className="section-num">§ 06 / CONTACT</div>
          <h2 className="section-title">Say hello.</h2>
          <div className="section-meta">REPLIES IN 24H</div>
        </div>
        <div className="contact-grid">
          <h3 className="contact-big">
            Drop a line<br />at{' '}
            <a href={'mailto:' + data.meta.email}>
              abhay.lal.cs<br />@gmail.com
            </a>
          </h3>
          <div className="contact-side">
            <a className="contact-link" href={'mailto:' + data.meta.email}>
              <span className="contact-lb">Email</span>
              <span className="contact-v">{data.meta.email}</span>
              <span className="contact-arr">→</span>
            </a>
            <a className="contact-link" href={data.meta.links.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="contact-lb">LinkedIn</span>
              <span className="contact-v">in/lal-abhay</span>
              <span className="contact-arr">↗</span>
            </a>
            <a className="contact-link" href={data.meta.links.github} target="_blank" rel="noopener noreferrer">
              <span className="contact-lb">GitHub</span>
              <span className="contact-v">@abhay-lal</span>
              <span className="contact-arr">↗</span>
            </a>
            <a className="contact-link" href={data.meta.links.scholar} target="_blank" rel="noopener noreferrer">
              <span className="contact-lb">Scholar</span>
              <span className="contact-v">Abhay Lal</span>
              <span className="contact-arr">↗</span>
            </a>
            <a className="contact-link" href={data.meta.links.x} target="_blank" rel="noopener noreferrer">
              <span className="contact-lb">X / Twitter</span>
              <span className="contact-v">@abbylaal</span>
              <span className="contact-arr">↗</span>
            </a>
            <div className="contact-link contact-link-static">
              <span className="contact-lb">Based in</span>
              <span className="contact-v">San Diego, CA</span>
              <span className="contact-arr">●</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
