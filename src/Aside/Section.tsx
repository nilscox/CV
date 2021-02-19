import React from 'react';

type SectionProps = {
  className?: string;
  title: string;
};

const Section: React.FC<SectionProps> = ({ className, title, children }) => (
  <section className={className}>
    <h3>{title}</h3>
    {children}
  </section>
);

export default Section;
