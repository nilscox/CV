import React from 'react';

import { Data, Interest as InterestType } from '../types';
import withData from '../withData';

import Section from './Section';

const Interest: React.FC<InterestType> = ({ name, link, description }) => (
  <a href={link} className="interest">
    <div className="name">{name}</div>
    <div className="description">{description}</div>
  </a>
);

const Interests: React.FC<Data> = ({ interests }) => {
  return (
    <Section title="Centres d'intérêts" className="interests">
      <div className="container">
        {interests.map((props, n) => (
          <Interest key={n} {...props} />
        ))}
      </div>
    </Section>
  );
};

export default withData(Interests);
