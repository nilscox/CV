import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import CV from './CV';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CV />, document.getElementById('root'));
registerServiceWorker();
