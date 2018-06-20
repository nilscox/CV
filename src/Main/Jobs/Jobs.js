import * as React from 'react';
import Entry from '../Entry';

const Jobs = ({ title, jobs }) => (
  <section className="jobs">

    <h2>{ title }</h2>

    { jobs.map(job => <Entry key={`job-${job.title}`} {...job} />) }

  </section>
);

export default Jobs;
