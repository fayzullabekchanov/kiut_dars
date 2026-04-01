import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Rasm1 from './1.png';
import Rasm2 from './2.png';
import Rasm3 from './3.png';
import Rasm4 from './4.png';
import Rasm5 from './5.png';




function App() {

    return (
        <div className="App">

            <img src={Rasm1} alt=""/>
            <img src={Rasm2} alt=""/>
            <img src={Rasm3} alt=""/>
            <img src={Rasm4} alt=""/>
            <img src={Rasm5} alt=""/>

        </div>
    );
}
export default App;
