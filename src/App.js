import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Rasm1 from './1.png';
import Rasm2 from './2.png';
import Rasm3 from './3.png';

function App() {

    return (
        <div className="App">

            <h1>Mushuk</h1>
            <img src={Rasm1} width={500} alt=""/>
            <h1>Sichqon</h1>
            <img src={Rasm2} width={500} alt=""/>
            <h1>Bomba</h1>
            <img src={Rasm3} width={500} alt=""/>


        </div>
    );
}
export default App;
