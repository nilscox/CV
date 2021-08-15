import React, { useState } from 'react';

import styled from '@emotion/styled';
import { Link, useRouteMatch } from 'react-router-dom';

import { space } from '../theme';

import FlagFR from './flags/fr.svg';
import FlagUS from './flags/us.svg';

export const Flags: React.FC = () => {
  const [hover, setHover] = useState(false);
  const isEnglish = useRouteMatch('/en.html');

  return (
    <Container hover={hover} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <LanguageLink showIcon hover={hover} lang={isEnglish ? 'en' : 'fr'} />
      <LanguageLink hover={hover} lang={isEnglish ? 'fr' : 'en'} />
    </Container>
  );
};

const Container = styled.div<{ hover: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  margin: ${space(2)};
  display: grid;
  row-gap: ${space(2)};
  text-align: right;
  transition: height 125ms ease-out;

  a {
    text-decoration: none;

    &:hover {
      opacity: 1;
    }
  }

  @media print {
    display: none;
  }
`;

const links = { fr: '/', en: '/en.html' };
const languages = { fr: 'Français', en: 'English' };
const flags = { fr: FlagFR, en: FlagUS };

type LanguageLinkProps = {
  showIcon?: true;
  hover: boolean;
  lang: 'fr' | 'en';
};

const LanguageLink: React.FC<LanguageLinkProps> = ({ showIcon, hover, lang }) => (
  <Link to={links[lang]}>
    <Language hover={hover}>{languages[lang]}</Language>
    <Icon as={flags[lang]} show={showIcon ?? hover} />
  </Link>
);

const Icon = styled('svg', { shouldForwardProp: () => false })<{ show: boolean }>`
  width: 1.4em;
  vertical-align: middle;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 225ms ease;
`;

const Language = styled.span<{ hover: boolean }>`
  margin-right: ${space(2)};
  opacity: ${({ hover }) => (hover ? 1 : 0)};
  transition: opacity 225ms ease;
`;
