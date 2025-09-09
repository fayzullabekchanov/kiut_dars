import React from 'react';

import Worddagi1 from './1.png'
import Worddagi2 from './2.png'
import Worddagi3 from './3.png'

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';




function App() {
    return (
        <div className="App">

            <img src={Worddagi1} alt=""/>
            <img src={Worddagi2} alt=""/>
            <img src={Worddagi3} width={1000} alt=""/>

             </div>

    );
}

export default App;