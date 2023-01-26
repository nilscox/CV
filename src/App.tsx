import { StrictMode, useEffect, useRef } from 'react';

import { css, Global, Theme, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import { Navigate, Route, Routes as RRRoutes } from 'react-router-dom';

import { AnalyticsProvider, TrackPageView } from './analytics';
import { Aside } from './Aside/Aside';
import en from './data/en/cv.json';
import fr from './data/fr/cv.json';
import { useLanguage } from './Main/Flags';
import { Main } from './Main/Main';
import { space, theme, themeColors } from './theme';
import { Data } from './types';

import '@fontsource/jetbrains-mono/latin-400-italic.css';
import '@fontsource/jetbrains-mono/latin-400.css';
import 'normalize.css';

const globalStyles = (theme: Theme) => css`
  ${themeColors}

  html {
    font-size: ${theme.fontSizes.default};
    line-height: ${theme.lineHeights.default};
  }

  body {
    background: ${theme.colors.body};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.mono};
  }

  p {
    margin: ${theme.spaces[1]}px 0;
  }

  strong {
    font-weight: bold;
    color: ${theme.colors.textBold};
  }

  a {
    color: inherit;
    text-decoration-color: ${theme.colors.muted};
    transition: opacity 125ms ease;

    &:hover {
      opacity: 0.8;
    }
  }

  @page {
    width: 210mm;
    height: 297mm;
    margin: 0;
  }

  @media print {
    html,
    body,
    #cv {
      height: 100%;
    }

    html {
      font-size: 10px;
      line-height: 1.3em;
    }

    a {
      text-decoration: none;
    }
  }
`;

export const App = () => (
  <StrictMode>
    <AnalyticsProvider>
      <ThemeProvider theme={theme}>
        <TrackPageView />
        <Global styles={globalStyles} />
        <Routes />
      </ThemeProvider>
    </AnalyticsProvider>
  </StrictMode>
);

const Routes = () => (
  <RRRoutes>
    <Route index element={<Content data={fr} />} />
    <Route path="fr" element={<Content data={fr} />} />
    <Route path="en" element={<Content data={en} />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </RRRoutes>
);

const Content = ({ data }: { data: Data }) => {
  useLogData(data);

  return (
    <Page>
      <Helmet>
        <meta
          name="description"
          content={
            data === fr
              ? "Développeur web passionné, spécialisé sur React et Node / NestJS, particulièrement attaché aux bonnes pratiques et à l'architecture des systèmes."
              : 'Passionate web developer, specialized in React and Node / NestJS, particularly attached to good practices and system architecture.'
          }
        />
        <title>{data === fr ? 'Nils Layet - Développeur TypeScript' : 'Nils Layet - TypeScript Developer'}</title>
      </Helmet>
      <Aside data={data} />
      <Main data={data} />
    </Page>
  );
};

const useLogData = (data: Data) => {
  const logged = useRef(false);
  const language = useLanguage();

  useEffect(() => {
    if (!logged.current) {
      logged.current = true;

      if (language === 'fr') {
        console.log('Voici mon CV, littéralement (:');
      } else {
        console.log('This is my resume, literally (:');
      }

      console.log(data);
    }
  }, [data, language]);
};

const Page = styled.div`
  display: flex;
  background: white;

  max-width: 1080px;
  min-width: 960px;

  @media screen {
    width: 70%;
    margin: auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    margin-top: ${space(2)};
    margin-bottom: ${space(2)};
  }

  @media print {
    height: 100%;
  }
`;
