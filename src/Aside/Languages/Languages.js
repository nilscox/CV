import * as React from 'react';

const Lang = ({ label, value }) => (
  <div className="lang">
    <div className="label">{ label }</div>
    <div className="value">{ value }</div>
  </div>
);

const Languages = ({ title, langs }) => (
  <section className="languages">

    <h2>{ title }</h2>

    { langs.map(lang => (
        <Lang key={`lang-${lang.label}`} label={lang.label} value={lang.value} />
    )) }

  </section>
);

export default Languages;
