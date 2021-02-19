import React from 'react';

import { Data } from '../types';
import withData from '../withData';
import Section from './Section';

const Ambitions: React.FC<Data> = ({ ambitions }) => (
  <Section title="Ambitions" className="ambitions">
    {ambitions.map((text, n) => (
      <div key={n} className="ambition">
        {text}
      </div>
    ))}
  </Section>
);

export default withData(Ambitions);
