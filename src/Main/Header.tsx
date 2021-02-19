import React, { useState, useEffect } from 'react';

import { Data } from '../types';
import withData from '../withData';

const commentsStyles = [
  ['<!--', '-->'],
  ['/*', '*/'],
  ['{-', '-}'],
  ['//', ''],
  ['--', ''],
  ['#', ''],
];

const useCommentsStyles = () => {
  const [style, setStyle] = useState(commentsStyles[0]);

  useEffect(() => {
    const timeout = setInterval(() => {
      setStyle(commentsStyles[~~(Math.random() * commentsStyles.length)]);
    }, 10042);

    return () => clearInterval(timeout);
  }, []);

  return style;
};

const AboutMe: React.FC<{ cvLink: string }> = ({ children, cvLink }) => {
  const [open, close] = useCommentsStyles();

  return (
    <a href={cvLink} className="aboutMe">
      {open} {children} {close}
    </a>
  );
};

const Header: React.FC<Data> = ({ firstName, lastName, aboutMe, cvLink }) => (
  <header>
    <div className="name">
      <div className="firstName">
        {firstName}
      </div>
      <div className="lastName">
        {lastName}
      </div>
    </div>
    <AboutMe cvLink={cvLink}>
      {aboutMe}
    </AboutMe>
  </header>
);

export default withData(Header);
