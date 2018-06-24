import React from 'react';
import './CV.css';

import Aside from './Aside';
import Main from './Main';

const CV = ({ labels, icons, data }) => (
  <div id="cv">

    <div id="aside">
      <Aside
        labels={labels}
        icons={icons}
        photo={data.photo}
        contact={data.contact}
        languages={data.languages}
        skills={data.skills}
      />
    </div>

    <div id="main">
      <Main
        labels={labels}
        id={data.id}
        summary={data.summary}
        jobs={data.jobs}
        projects={data.projects}
        education={data.education}
        interests={data.interests}
      />
    </div>

  </div>
);

export default CV;
