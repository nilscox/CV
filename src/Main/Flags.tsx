import { useState } from 'react';

import styled from '@emotion/styled';
import { Link, useMatch } from 'react-router-dom';

import { space } from '../theme';

import FlagFR from './flags/fr.svg';
import FlagUS from './flags/us.svg';

const publicPath = process.env.PUBLIC_PATH ?? '/';

export type Language = 'fr' | 'en';

export const useLanguage = (): Language => {
  return useMatch(links.en) ? 'en' : 'fr';
};

export const Flags = () => {
  const [hover, setHover] = useState(false);
  const language = useLanguage();

  return (
    <Container hover={hover} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <LanguageLink showIcon hover={hover} language={language} />
      <LanguageLink hover={hover} language={language === 'fr' ? 'en' : 'fr'} />
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

const links = { fr: publicPath, en: publicPath + 'en' };
const languages = { fr: 'Français', en: 'English' };
const flags = { fr: FlagFR, en: FlagUS };

type LanguageLinkProps = {
  showIcon?: true;
  hover: boolean;
  language: Language;
};

const LanguageLink = ({ showIcon, hover, language }: LanguageLinkProps) => (
  <Link to={links[language]}>
    <Language hover={hover}>{languages[language]}</Language>
    <Icon as={flags[language]} show={showIcon ?? hover} />
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
