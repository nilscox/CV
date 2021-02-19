import React from 'react';

import { Data } from '../types';
import withData from '../withData';

import Section from './Section';
import Entry from './Entry';

const Education: React.FC<Data> = ({ education }) => {
  return (
    <Section title="Cursus" className="education">
      {education.map((props, n) => (
        <Entry key={n} {...props} />
      ))}
    </Section>
  );
};

export default withData(Education);
