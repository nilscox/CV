import React from 'react';

import Header from './Header';
import Headline from './Headline';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Interests from './Interests';

import './Main.scss';

const Main: React.FC = () => (
  <main>
    <Header />
    <Headline />
    <Experience />
    <Projects />
    <Education />
    <Interests />
  </main>
);

export default Main;
