import * as React from 'react';

const Address = ({ firstLine, secondLine }) => (
  <div className="address">
    <div>{ firstLine }</div>
    <div>{ secondLine }</div>
  </div>
);

const Web = ({ email, site }) => (
  <div className="web">
    <div>
      <a href={`mailto:${email}`}>{ email }</a>
      <i className="fas fa-envelope"></i>
    </div>
    <div>
      <a href="https://nils.cx" target="_blank" rel="noopener noreferrer">{ site }</a>
      <i className="fas fa-globe"></i>
    </div>
  </div>
);

const Social = ({ social }) => (
  <div className="social">

  { social.map(item => (
    <div key={`social-${item.label}`} className="social-item">
      <i className={`${item.icon}`}></i>
      <div className="label">{ item.label }</div>
      <div className="value">{ item.value }</div>
    </div>
  )) }

  </div>
);

const Contact = ({ title, address, web, social }) => (
  <section className="contact">

    <h2>{ title }</h2>

    <Address {...address} />
    <Web {...web} />
    <Social social={social} />

  </section>
);

export default Contact;
