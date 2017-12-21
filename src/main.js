import React from 'react';
import ReactDOM from 'react-dom';

require('../src/style/style.scss');

import App from './components/app.js';

ReactDOM.render(
    <App />, document.getElementById('react-container')
);