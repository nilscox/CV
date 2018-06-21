import * as React from 'react';
import './Main.css';

import Header from './Header';
import Jobs from './Jobs';
import Projects from './Projects';
import Education from './Education';
import Interests from './Interests';

const Main = ({ id, summary, jobs, projects, education, interests }) => (
  <main>

    <Header {...id} summary={summary} />
    <Jobs {...jobs} />
    <Projects {...projects} />
    <Education {...education} />
    <Interests {...interests} />

  </main>
);

export default Main;
