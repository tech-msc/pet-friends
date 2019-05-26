import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import * as serviceWorker from './serviceWorker';

// CSS imports
import './contents/external_libs/tachyons.min.css';
import "./index.css"


ReactDOM.render(
        <App /> , document.getElementById('root')

);

serviceWorker.unregister();
