import React from 'react';

import 'normalize.css';
import 'typeface-jetbrains-mono';

import Main from './Main';
import Aside from './Aside';

import './styles.scss';

const App: React.FC = () => (
  <React.StrictMode>
    <Aside />
    <Main />
  </React.StrictMode>
);

export default App;
