import React from 'react';

import Photo from './Photo';
import Contact from './Contact';
import Languages from './Languages';
import Skills from './Skills';
import Ambitions from './Ambitions';

import './Aside.scss';

const Aside: React.FC = () => (
  <aside>
    <Photo />
    <Contact />
    <Languages />
    <Skills />
    <Ambitions />
  </aside>
);

export default Aside;
