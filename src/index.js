import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';

import {animals} from './animals';


ReactDOM.render(

    <div>
        <div className="tc">
                {/* <h1>Animals</h1>                 */}
                {/* <div className="f3 tc">
                    <h2>Jane Doe </h2>
                    <p>jane@doe.com</p>
                </div> */}
        </div>
        <div>
            <Card animal={animals[0]} />
            <Card animal={animals[1]} />
            <Card animal={animals[2]} />
            <Card animal={animals[3]} />
            <Card animal={animals[4]} />
            <Card animal={animals[5]} />
            <Card animal={animals[6]} />
            <Card animal={animals[7]} />
            <Card animal={animals[8]} />
            <Card animal={animals[9]} />
        </div>




        {/* <div>
            <Card id={animals[0].id} name={ animals[0].name } src={ animals[0].src } 
                type={ animals[0].animalType } />
            <Card id={animals[1].id} name={ animals[1].name } src={ animals[1].src } 
                type={ animals[1].animalType } />
            <Card id={animals[2].id} name={ animals[2].name } src={ animals[2].src } 
                type={ animals[2].animalType } />
            <Card id={animals[3].id} name={ animals[3].name } src={ animals[3].src } 
                type={ animals[3].animalType } />
            <Card id={animals[4].id} name={ animals[4].name } src={ animals[4].src } 
                type={ animals[4].animalType } />
            <Card id={animals[5].id} name={ animals[5].name } src={ animals[5].src } 
                type={ animals[5].animalType } />
            <Card id={animals[6].id} name={ animals[6].name } src={ animals[6].src } 
                type={ animals[6].animalType } />
            <Card id={animals[7].id} name={ animals[7].name } src={ animals[7].src } 
                type={ animals[7].animalType } />
            <Card id={animals[8].id} name={ animals[8].name } src={ animals[8].src } 
                type={ animals[8].animalType } />
            <Card id={animals[9].id} name={ animals[9].name } src={ animals[9].src } 
                type={ animals[9].animalType } />
        </div> */}
    </div>
    , document.getElementById('root') 

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
