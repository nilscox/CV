import React from 'react';
import './CV.css';

import Aside from './Aside';
import Main from './Main';

const CV = ({ data }) => (
  <div id="cv">
    <Aside
      photo={data.photo}
      contact={data.contact}
      languages={data.languages}
      skills={data.skills}
    />
    <Main />
  </div>
);

export default CV;
