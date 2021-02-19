import React from 'react';

import { Data } from '../types';
import withData from '../withData';
import Section from './Section';

type LanguageProps = {
  label: string;
  level: string;
};

const Language: React.FC<LanguageProps> = ({ label, level }) => (
  <div className={label}>
    <div className="name">
      {label}
    </div>
    <div className="level">
      {level}
    </div>
  </div>
);

const Languages: React.FC<Data> = ({ languages: { french, english, spanish } }) => (
  <Section title="Langues" className="languages">
    <Language label="Français" level={french} />
    <Language label="Anglais" level={english} />
    <Language label="Espagnol" level={spanish} />
  </Section>
);

export default withData(Languages);
