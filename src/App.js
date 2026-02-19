import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Worddagi1 from './avto1.jpg'
import Worddagi2 from './avto2.jpg'


function App() {

    return (
        <div className="App">
            <img src={Worddagi1} width={900} alt=""/>
            <img src={Worddagi2} width={900} alt=""/>

        </div>
    );
}
export default App;
