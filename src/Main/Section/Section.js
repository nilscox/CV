import * as React from 'react';
import Entry from '../Entry';

export const SubSection = ({ title, entries }) => (
  <div className="subsection">
    <h3>{ title }</h3>
    { entries.map(entry => <Entry key={`subsection-entry-${entry.title}`} {...entry} />) }
  </div>
);

const Section = ({ title, subsections, entries }) => (
  <section>

    <h2>{ title }</h2>

    { subsections && Object.keys(subsections).map(subsection => (
      <SubSection
        key={`subsection-${subsection}`}
        title={subsection}
        entries={subsections[subsection]}
      />
    )) }

    { entries && entries.map(entry => (
      <Entry
        key={`section-entry-${entry.title}`}
        {...entry}
      />
    )) }

  </section>
);

export default Section;
