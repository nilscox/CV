import * as React from 'react';
import Entry from '../Entry';

const Jobs = ({ title, jobs }) => (
  <section className="jobs">

    <h2>{ title }</h2>

    { jobs.map(job => <Entry {...job} />) }

  </section>
);

export default Jobs;
