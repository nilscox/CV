import * as React from 'react';

const Interest = ({ title, items }) => (
  <div className="interest">

    <h3>{ title }</h3>

    { items.map(item => (
      <span className="interest-item">{ item }</span>
    )) }

  </div>
);

const Interests = ({ interests }) => (
  <section className="interests">

    { interests.map(interest => <Interest {...interest} />) }

  </section>
);

export default Interests;
