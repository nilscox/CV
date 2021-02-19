import React from 'react';

import { Data } from '../types';
import withData from '../withData';

import Section from './Section';
import Entry from './Entry';

const Projects: React.FC<Data> = ({ projects }) => {
  return (
    <Section title="Projets" className="projects">
      {projects.map((props, n) => (
        <Entry key={n} {...props} />
      ))}
    </Section>
  );
};

export default withData(Projects);
