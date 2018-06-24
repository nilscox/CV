import * as React from 'react';
import './Interests.css';

const Interest = ({ title, items, description }) => (
  <div className="interest">

    <h3>{ title }</h3>

    <div className="items">{ items.join(', ') }</div>
    <div className="description">{ description }</div>

  </div>
);

const Interests = ({ title, interests }) => (
  <section className="interests">

    <h2>{ title }</h2>

    <div className="interests-wrapper">
      { Object.keys(interests).map(interest => (
        <Interest
          key={`interest-${interest}`}
          title={interest}
          items={interests[interest].items}
          description={interests[interest].description}
        />
      )) }
    </div>

  </section>
);

export default Interests;
