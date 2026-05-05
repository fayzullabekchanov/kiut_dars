import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Rasm1 from './v3.png';
import Rasm2 from './v3_1.png';


function App() {

    return (
        <div className="App">

            <img src={Rasm1} width={500} alt=""/>
            <img src={Rasm2} width={500} alt=""/>
        </div>
    );
}

export default App;
