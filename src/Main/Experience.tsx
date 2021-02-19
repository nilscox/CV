import React from 'react';

import { Data } from '../types';
import withData from '../withData';

import Section from './Section';
import Entry from './Entry';

const Experience: React.FC<Data> = ({ experience }) => {
  return (
    <Section title="Expériences professionnelles" className="experience">
      {experience.map((props, n) => (
        <Entry key={n} {...props} />
      ))}
    </Section>
  );
};

export default withData(Experience);
