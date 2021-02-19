import React from 'react';

import { Data } from '../types';
import withData from '../withData';
import Section from './Section';

type SkillProps = {
  label: string;
  level: String;
};

const Skill: React.FC<SkillProps> = ({ label, level }) => <div className={`skill level-${level.length}`}>{label}</div>;

const Skills: React.FC<Data> = ({ skills }) => (
  <Section title="Compétences" className="skills">
    <div className="container">
      {Object.entries(skills).map(([label, level], n) => (
        <Skill key={n} label={label} level={level} />
      ))}
    </div>
  </Section>
);

export default withData(Skills);
