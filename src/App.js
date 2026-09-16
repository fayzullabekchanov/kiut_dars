import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import Rasm1 from './tfw.png';
import Rasm2 from './tfw_rus.jpg';
import Rasm3 from './word1.jpg';
import Rasm4 from './word2.jpg';


function App() {

    return (
        <div className="App">
            <a href={Rasm1}>Uzbek</a>
            <a href={Rasm2}>Rus tili</a>
            <a
                href={`${Rasm3}`}
                onClick={(e) => {
                    e.preventDefault();

                    const yangiOyna = window.open('', '_blank');

                    yangiOyna.document.write(`
    <html>
    <body style="
        margin: 0;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    ">
        <img src="${Rasm3}" style="max-width:80%; max-height:80vh;">
        <img src="${Rasm4}" style="max-width:80%; max-height:80vh;">
    </body>
    </html>
`);
                }}
            >
                IST-901U
            </a>

        </div>
    );
}

export default App;
