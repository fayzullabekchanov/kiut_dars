import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Rasm1 from './obyektivka1.png';
import Rasm2 from './obyektivka2.png';
import Rasm3 from './obyektivka3.png';

function App() {

    return (
        <div className="App">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfatwSMdDYovsp6ydxhaL5h63eKY6MGq_IH4uhvg_8DXSEQbg/viewform?usp=header">Havolani bosib Familiya Ism Sharifongizni toldiring</a>
            <img src={Rasm1} width={500} alt=""/>
            <img src={Rasm2} width={500} alt=""/>
            <img src={Rasm3} width={500} alt=""/>
        </div>
    );
}

export default App;
