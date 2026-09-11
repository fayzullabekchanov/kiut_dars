import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Rasm1 from './obyektivka1.png';
import Rasm2 from './obyektivka2.png';
import Rasm3 from './obyektivka3.png';

function App() {

    return (
        <div className="App">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd0jdWM_xVZTwqWOIL1tD0YFWzCb7-IodffRRnpoCCCYEkqTg/viewform?usp=publish-editor">tugma</a>
            <img src={Rasm1} width={500} alt=""/>
            <img src={Rasm2} width={500} alt=""/>
            <img src={Rasm3} width={500} alt=""/>
        </div>
    );
}

export default App;
