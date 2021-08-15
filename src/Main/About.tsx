import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import { color, fontSize } from '../theme';

const commentsStyles = [
  ['<!--', '-->'],
  ['#', ''],
  ['/*', '*/'],
  ['{-', '-}'],
  ['//', ''],
  ['(*', '*)'],
  ['--', ''],
  ['/**', '*/'],
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

export const About: React.FC<{ link: string }> = ({ link, children }) => {
  const [open, close] = useCommentsStyles();

  return (
    <Container href={link}>
      {open} {children} {close}
    </Container>
  );
};

const Container = styled.a`
  font-size: ${fontSize('small')};
  color: ${color('muted')};
  font-variant-ligatures: none;
  text-align: right;
  text-decoration: none;
  display: block;
`;
