import * as React from 'react';
import './Languages.css';

const Lang = ({ label, value }) => (
  <div className="lang">
    <div className="label">{ label }</div>
    <div className="value">{ value }</div>
  </div>
);

const Languages = ({ title, languages }) => (
  <section className="languages">

    <h2>{ title }</h2>

    { Object.keys(languages).map(lang => (
        <Lang key={`lang-${lang}`} label={lang} value={languages[lang]} />
    )) }

  </section>
);

export default Languages;
