import * as React from 'react';
import './Contact.css';

const Address = ({ firstLine, secondLine }) => (
  <div className="address">
    <div>{ firstLine }</div>
    { secondLine && <div>{ secondLine }</div> }
  </div>
);

const Web = ({ icons, tel, email, site }) => (
  <div className="web">
    { tel && <a href={ `tel:${tel.replace(/\(0\)| /g, '')}` } target="_blank" rel="noopener noreferrer" className="tel">
      { tel } <i className={icons['tel']}></i>
    </a> }
    { email && <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="email">
      { email } <i className={icons['email']}></i>
    </a> }
    { site && <a href={site} target="_blank" rel="noopener noreferrer" className="site">
      { site } <i className={icons['website']}></i>
    </a> }
  </div>
);

const Social = ({ icons, social }) => (
  <div className="social">
    { Object.keys(social).map(item => (
      <a key={`social-${item}`} className="social-item" href={social[item].url} target="_blank" rel="noopener noreferrer">
        <i className={`${icons[item]}`}></i>
        <div className="label">{ item }</div>
        <div className="value">
          { social[item].value }
        </div>
      </a>
    )) }
  </div>
);

const Contact = ({ title, icons, address, tel, email, site, social }) => (
  <section className="contact">

    <h2>{ title }</h2>

    <Address {...address} />
    <Web icons={icons} tel={tel} email={email} site={site} />
    <Social icons={icons} social={social} />

  </section>
);

export default Contact;
