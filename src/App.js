import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Worddagi1 from './obyektivka1.png'
import Worddagi2 from './obyektivka2.png'
import Worddagi3 from './obyektivka3.png'


function App() {

    return (
        <div className="App">
            <img src={Worddagi1} width={900} alt=""/>
            <img src={Worddagi2} width={900} alt=""/>
            <img src={Worddagi3} width={900} alt=""/>

        </div>
    );
}
export default App;
