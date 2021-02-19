import React from 'react';

type SectionProps = {
  className?: string;
  title: string;
};

const Section: React.FC<SectionProps> = ({ className, title, children }) => {
  return (
    <section className={className}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
