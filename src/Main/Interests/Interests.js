import * as React from 'react';
import './Interests.css';

const Interest = ({ title, items, description }) => (
  <div className="interest">

    <h3>{ title }</h3>

    { items.map(item => (
      <span key={`interest-item-${item}`} className="interest-item">{ item }</span>
    )) }

  </div>
);

const Interests = ({ title, interests }) => (
  <section className="interests">

    <h2>{ title }</h2>

    { Object.keys(interests).map(interest => (
      <Interest
        key={`interest-${interest}`}
        title={interest}
        items={interests[interest].items}
        description={interests[interest].description}
      />
    )) }

  </section>
);

export default Interests;
