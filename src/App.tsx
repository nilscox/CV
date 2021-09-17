import React, { useEffect, useState } from 'react';

import { css, Global, Theme, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Aside } from './Aside/Aside';
import en from './data/en/cv.json';
import fr from './data/fr/cv.json';
import { useLanguage } from './Main/Flags';
import { Main } from './Main/Main';
import { space, theme, themeColors } from './theme';
import { TrackingProvider, TrackPageView } from './tracking';
import { Data } from './types';

import 'normalize.css';
import '@fontsource/jetbrains-mono/latin-400.css';
import '@fontsource/jetbrains-mono/latin-400-italic.css';

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

export const App: React.FC = () => (
  <React.StrictMode>
    <TrackingProvider>
      <ThemeProvider theme={theme}>
        <TrackPageView />
        <Global styles={globalStyles} />
        <Routes />
      </ThemeProvider>
    </TrackingProvider>
  </React.StrictMode>
);

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/(fr)?">
      <Content data={fr} />
    </Route>
    <Route path="/en">
      <Content data={en} />
    </Route>
    <Route>
      <Redirect to="/" />
    </Route>
  </Switch>
);

const useLogData = (data: Data) => {
  const [rendered, setRendered] = useState(false);
  const language = useLanguage();

  useEffect(() => {
    if (!rendered) {
      setRendered(true);

      if (language === 'fr') {
        console.log('Voici mon CV, littéralement (:');
      } else {
        console.log('This is my resume, literally (:');
      }

      console.log(data);
    }
  }, [data, language, rendered]);
};

const Content: React.FC<{ data: Data }> = ({ data }) => {
  useLogData(data);

  return (
    <Page>
      <Aside data={data} />
      <Main data={data} />
    </Page>
  );
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
