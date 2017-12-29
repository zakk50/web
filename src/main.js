import React from 'react';
import ReactDOM from 'react-dom';

require('../src/style/style.scss');

import App from './components/notes/app.js';
import Interface from './components/interface/Interface';

ReactDOM.render(
    <div className="">
        <Interface />
        <App />
    </div>, document.getElementById('react-container')
);