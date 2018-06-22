import * as React from 'react';
import './Main.css';

import Header from './Header';
import Section from './Section';
import Interests from './Interests';

const Main = ({ labels, id, summary, jobs, projects, education, interests }) => (
  <main>

    <Header {...id} summary={summary} />
    <Section title={labels.jobs} entries={jobs} />
    <Section subsections={projects} />
    <Section title={labels.education} entries={education} />
    <Interests title={labels.interests} interests={interests} />

  </main>
);

export default Main;
