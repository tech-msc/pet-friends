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
        <div className="flex justify-center flex-wrap" >
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


    </div>



    , document.getElementById('root') 

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
