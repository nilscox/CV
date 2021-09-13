import React, { useEffect, useState } from 'react';

import { css, Global, Theme, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Aside } from './Aside/Aside';
import en from './data/en/cv.json';
import fr from './data/fr/cv.json';
import { Main } from './Main/Main';
import { space, theme } from './theme';
import { Data } from './types';

import 'normalize.css';
import 'typeface-jetbrains-mono';

const globalStyles = (theme: Theme) => css`
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
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Routes />
    </ThemeProvider>
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

const Content: React.FC<{ data: Data }> = ({ data }) => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (!rendered) {
      setRendered(true);

      console.log('This is my resume, literally (:');
      console.log(data);
    }
  }, [data, rendered]);

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
