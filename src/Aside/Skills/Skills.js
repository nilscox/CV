import * as React from 'react';
import './Skills.css'

const Skill = ({ label, values }) => (
  <div className="skill">
    <div className="label">{ label }</div>
    <div className="values">
      {/* ' &bullet;&nbsp;' */}
      { values.join(' • ') }
    </div>
  </div>
);

const Skills = ({ skills }) => (
  <section className="skills">

    <h2>Skills</h2>

    { Object.keys(skills).map(skill => (
      <Skill key={`skill-${skill}`} label={skill} values={skills[skill]} />
    )) }

  </section>
);

export default Skills;
