import * as React from 'react';
import './Contact.css';

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


const Social = ({ social }) => {
  const items = ['LinkedIn', 'Github', 'Bitbucket'];
  const iconsClassNames = {
    'LinkedIn': 'fab fa-linkedin',
    'Github': 'fab fa-github',
    'Bitbucket': 'fab fa-bitbucket',
  };

  return (
    <div className="social">
      { items.map(item => (
        <div key={`social-${item}`} className="social-item">
          <i className={`${iconsClassNames[item]}`}></i>
          <div className="label">{ item }</div>
          <div className="value">{ social[item] }</div>
        </div>
      )) }
    </div>
  );
}

const Contact = ({ title, address, web, social }) => (
  <section className="contact">

    <h2>{ title }</h2>

    <Address {...address} />
    <Web {...web} />
    <Social social={social} />

  </section>
);

export default Contact;
