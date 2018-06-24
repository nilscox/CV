import * as React from 'react';
import './Aside.css';

import Photo from './Photo';
import Contact from './Contact';
import Languages from './Languages';
import Skills from './Skills';

const Aside = ({ labels, icons, photo, contact, languages, skills }) => (
  <aside>
    <Photo {...photo} />
    <Contact title={labels.contact} icons={icons} {...contact} />
    <Languages title={labels.languages} languages={languages} />
    <Skills title={labels.skills} skills={skills} />
  </aside>
);

export default Aside;
