import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import 'typeface-jetbrains-mono';

import Main from './Main';
import Aside from './Aside';

import './styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Aside />
    <Main />
  </React.StrictMode>,
  document.getElementById('cv'),
);
