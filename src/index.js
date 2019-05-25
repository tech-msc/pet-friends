import React from 'react';
import ReactDOM from 'react-dom';
import './contents/external_libs/tachyons.min.css';


import CardList from './CardList';

import * as serviceWorker from './serviceWorker';

import { animals as animalListImport } from './animals';

ReactDOM.render(

  
    <CardList animalList={ animalListImport} />
    
    , document.getElementById('root') 

);

serviceWorker.unregister();
