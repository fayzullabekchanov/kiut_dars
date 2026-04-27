import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Rasm1 from '././V1_Page_1.jpg';
import Rasm2 from '././V1_Page_2.jpg';
import Rasm3 from '././V1_Page_3.jpg';

function App() {

    return (
        <div className="App">

           <img src={Rasm1} width={500} alt=""/>
           <img src={Rasm2} width={500} alt=""/>
           <img src={Rasm3} width={500} alt=""/>



        </div>
    );
}
export default App;
