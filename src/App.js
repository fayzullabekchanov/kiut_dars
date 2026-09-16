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

            <a href={Rasm1} target="_blank" rel="noreferrer">
                Uzbek
            </a>

            <a href={Rasm2} target="_blank" rel="noreferrer">
                Rus tili
            </a>

            <a
                href={Rasm3}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                    e.preventDefault();

                    const yangiOyna = window.open('', '_blank');

                    yangiOyna.document.write(`
                        <!DOCTYPE html>
                        <html lang="uz">
                        <head>
                            <meta charset="UTF-8">
                            <title>IST-901U</title>
                        </head>

                        <body style="
                            margin: 0;
                            min-height: 100vh;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            gap: 20px;
                        ">

                            <img 
                                src="${Rasm3}" 
                                alt="IST-901U - Topshiriq 1"
                                style="
                                    max-width: 80%;
                                    max-height: 80vh;
                                    object-fit: contain;
                                "
                            >

                            <img 
                                src="${Rasm4}" 
                                alt="IST-901U - Topshiriq 2"
                                style="
                                    max-width: 80%;
                                    max-height: 80vh;
                                    object-fit: contain;
                                "
                            >

                        </body>
                        </html>
                    `);

                    yangiOyna.document.close();
                }}
            >
                IST-901U
            </a>

        </div>
    );
}

export default App;