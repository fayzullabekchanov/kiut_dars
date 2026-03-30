import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Rasm1 from './Masala_Json_Page_1.jpg';
import Rasm2 from './Masala_Json_Page_2.jpg';
import Rasm3 from './Masala_Json_Page_3.jpg';




function App() {

    return (
        <div className="App">

            <img src={Rasm1} alt=""/>
            <img src={Rasm2} alt=""/>
            <img src={Rasm3} alt=""/>

        </div>
    );
}
export default App;
