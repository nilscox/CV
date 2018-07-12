import * as React from 'react';
import './Contact.css';

const Address = ({ firstLine, secondLine }) => (
  <div className="address">
    <div>{ firstLine }</div>
    <div>{ secondLine }</div>
  </div>
);

const Web = ({ icons, tel, email, site }) => (
  <div className="web">
    <div className="tel">
      { tel }
      <i className={icons['tel']}></i>
    </div>
    <div className="email">
      <a href={`mailto:${email}`}>{ email }</a>
      <i className={icons['email']}></i>
    </div>
    <div className="site">
      <a href="https://nils.cx" target="_blank" rel="noopener noreferrer">{ site }</a>
      <i className={icons['website']}></i>
    </div>
  </div>
);


const Social = ({ icons, social }) => (
  <div className="social">
    { Object.keys(social).map(item => (
      <div key={`social-${item}`} className="social-item">
        <i className={`${icons[item]}`}></i>
        <div className="label">{ item }</div>
        <a className="value" href={social[item].url} target="_blank" rel="noopener noreferrer">
          { social[item].value }
        </a>
      </div>
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
