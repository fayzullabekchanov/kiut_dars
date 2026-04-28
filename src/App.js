import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Rasm1 from './l1.png';
import Rasm2 from './l2.png';

function App() {

    return (
        <div className="App">
            <h1>Likopcha</h1>
            <img src={Rasm1} width={500} alt=""/>
            <h1>Olma</h1>
            <img src={Rasm2} width={500} alt=""/>
        </div>
    );
}

export default App;
