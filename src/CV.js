import React from 'react';
import './CV.css';

import Aside from './Aside';
import Main from './Main';

const CV = ({ data }) => (
  <div id="cv">

    <div id="aside">
      <Aside
        photo={data.photo}
        contact={data.contact}
        languages={data.languages}
        skills={data.skills}
      />
    </div>

    <div id="main">
      <Main {...data} />
    </div>

  </div>
);

export default CV;
