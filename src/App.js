import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Worddagi1 from './word1.jpg'
import Worddagi2 from './word2.jpg'
import Worddagi3 from './formula.png'

function App() {

    return (
        <div className="App">
            <img src={Worddagi1} width={900} alt=""/>----------------------------------------------------------------------------------------------
            <img src={Worddagi2} width={900} alt=""/>----------------------------------------------------------------------------------------------
            <img src={Worddagi3} width={900} alt=""/>----------------------------------------------------------------------------------------------
        </div>
    );
}
export default App;
