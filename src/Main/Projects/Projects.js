import * as React from 'react';
import Entry from '../Entry';
import './Projects.css';

const Section = ({ title, projects }) => (
  <div className="section">

    <h3>{ title }</h3>

    { projects.map(project => <Entry key={`project-${project.title}`} {...project} />) }

  </div>
);

const Projects = ({ title, sections }) => (
  <section className="projects">

    <h2>{ title }</h2>

    { sections.map(section => <Section key={`section-${section.title}`} {...section} />) }

  </section>
);

export default Projects;