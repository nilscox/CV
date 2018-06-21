import * as React from 'react';
import Entry from '../Entry';
import './Education';

const Education = ({ title, educations }) => (
  <section className="cursus">

      <h2>{ title }</h2>

      { educations.map(education => <Entry {...education} />) }

  </section>
);

export default Education;
