import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Rasm1 from './tfw.png';
import Rasm2 from './tfw_rus.jpg';
import Rasm3 from './word1.jpg';
import Rasm4 from './word2.jpg';
import Rasm5 from './Formulalar.jpg';


import Table1 from './t_1.jpg';
import Table2 from './t_2.jpg';
import Table3 from './t_3.jpg';
import Table4 from './t_4.jpg';
import Table5 from './t_5.jpg';

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
                href={Table1}
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
                            <title>Table</title>
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
                                src="${Table1}" 
                                alt="IST-901U - Topshiriq 1"
                                style="
                                    max-width: 80%;
                                    max-height: 80vh;
                                    object-fit: contain;
                                "
                            >

                            <img 
                                src="${Table2}" 
                                alt="IST-901U - Topshiriq 2"
                                style="
                                    max-width: 80%;
                                    max-height: 80vh;
                                    object-fit: contain;
                                "
                            >
                            <img 
                                src="${Table3}" 
                                alt="IST-901U - Topshiriq 2"
                                style="
                                    max-width: 80%;
                                    max-height: 80vh;
                                    object-fit: contain;
                                "
                            >
                            <img 
                                src="${Table4}" 
                                alt="IST-901U - Topshiriq 2"
                                style="
                                    max-width: 80%;
                                    max-height: 80vh;
                                    object-fit: contain;
                                "
                            >
                            <img 
                                src="${Table5}" 
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
                Table
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
                            <title>Shapes</title>
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
                Shapes
            </a>

            <a
                href={Rasm5}
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
                            <title>Formulalar</title>
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
                                src="${Rasm5}" 
                                alt="IST-901U - Topshiriq 1"
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
                Formulalar
            </a>

        </div>
    );
}

export default App;