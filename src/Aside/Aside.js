import * as React from 'react';
import './Aside.css';

import Photo from './Photo';
import Contact from './Contact';
import Languages from './Languages';
import Skills from './Skills';

const Aside = ({ photo, contact, languages, skills }) => (
  <aside>
    <Photo photo={photo} />
    <Contact {...contact} />
    <Languages {...languages} />
    <Skills skills={skills} />
  </aside>
);

export default Aside;
