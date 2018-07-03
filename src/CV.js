import React from 'react';
import './CV.css';

import Aside from './Aside';
import Main from './Main';

const CV = ({ meta, data }) => (
  <div id="cv">

    <Aside
      labels={meta.labels}
      icons={meta.icons}
      photo={meta.photo}
      contact={data.contact}
      languages={data.languages}
      skills={data.skills}
    />

    <Main
      labels={meta.labels}
      id={data.id}
      summary={data.summary}
      jobs={data.jobs}
      projects={data.projects}
      education={data.education}
      interests={data.interests}
    />

  </div>
);

export default CV;
