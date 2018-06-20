import * as React from 'react';

const Language = ({ label, value }) => (
  <div className="lang">
    <div className="label">{ label }</div>
    <div className="value">{ value }</div>
  </div>
);

const Languages = ({ languages }) => (
  <section className="languages">

    <h2>Locales</h2>

    { languages.map(lang => (
        <Language key={`lang-${lang.label}`} label={lang.label} value={lang.value} />
    )) }

  </section>
);

export default Languages;
