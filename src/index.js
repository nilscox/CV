import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import CV from './CV';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CV data={require('./data.json')} />, document.getElementById('root'));
registerServiceWorker();
