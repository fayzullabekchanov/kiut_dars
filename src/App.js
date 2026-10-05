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

import TableFormula1 from './table1.png';
import TableFormula2 from './table1rus.png';

import TableImages1 from './ram_jadval1.png';
import TableImages2 from './ram_jadval2.png';
import TableImages3 from './ram_jadval3.png';
import TableImages4 from './ram_jadval4.png';
import TableImages5 from './ram_jadval5.png';

import WordNazorat1 from './WordSmartArt_Page_1.jpg';
import WordNazorat2 from './WordSmartArt_Page_2.jpg';

import WordMundarija1 from './Mundarija/1.jpg';
import WordMundarija2 from './Mundarija/2.jpg';
import WordMundarija3 from './Mundarija/3.jpg';
import WordMundarija4 from './Mundarija/4.jpg';
import WordMundarija5 from './Mundarija/5.jpg';
import WordMundarija6 from './Mundarija/6.jpg';
import WordMundarija7 from './Mundarija/7.jpg';
import WordMundarija8 from './Mundarija/8.jpg';
import WordMundarija9 from './Mundarija/9.jpg';

import ExcelMum1 from './excel1.0.png';
import ExcelMum2 from './excel1.1.jpg';

import ExcelFoiz1 from './ExcelFoiz1.png';
import ExcelFoiz2 from './ExcelFoiz2.png';
import ExcelFoiz3 from './ExcelFoizN.png';




function App() {
    const images = [
        WordMundarija1,
        WordMundarija2,
        WordMundarija3,
        WordMundarija4,
        WordMundarija5,
        WordMundarija6,
        WordMundarija7,
        WordMundarija8,
        WordMundarija9
    ];

    return (
        <div className="App">
            <a
                href={TableImages1}
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
                            <title>Text Color</title>
                        </head>
                        <body style="margin: 0; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                            <h1>Uzbek tilida</h1>
                            <img src="${Rasm1}" alt="Topshiriq">
                            <h1>Rus tilida</h1>    
                            <img src="${Rasm2}" alt="Topshiriq">    
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
                Text Color
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
                        <body style="margin: 0; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                            <img src="${Table1}" alt="Table 1" style="max-width: 80%; max-height: 80vh; object-fit: contain;">
                            <img src="${Table2}" alt="Table 2" style="max-width: 80%; max-height: 80vh; object-fit: contain;">
                            <img src="${Table3}" alt="Table 3" style="max-width: 80%; max-height: 80vh; object-fit: contain;">
                            <img src="${Table4}" alt="Table 4" style="max-width: 80%; max-height: 80vh; object-fit: contain;">
                            <img src="${Table5}" alt="Table 5" style="max-width: 80%; max-height: 80vh; object-fit: contain;">
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
                Table
            </a>

            <a
                href={WordNazorat1}
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
                            <title>SmartArt</title>
                        </head>
                        <body style="margin: 0; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                            <img src="${WordNazorat1}" alt="Topshiriq">    
                            <img src="${WordNazorat2}" alt="Topshiriq">    
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
                SmartArt
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
                        <body style="margin: 0; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                            <img src="${Rasm3}" alt="Shape 1" style="max-width: 80%; max-height: 80vh; object-fit: contain;">
                            <img src="${Rasm4}" alt="Shape 2" style="max-width: 80%; max-height: 80vh; object-fit: contain;">
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
                        <body style="margin: 0; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                            <img src="${Rasm5}" alt="Formulalar" style="max-width: 80%; max-height: 80vh; object-fit: contain;">                          
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
                Formulalar
            </a>

            <a
                href={TableFormula1}
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
                            <title>Table Formula</title>
                        </head>
                        <body style="margin: 0; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                            <img src="${TableFormula1}" alt="Table Formula 1" style="max-width: 80%; max-height: 80vh; object-fit: contain;">    
                            <img src="${TableFormula2}" alt="Table Formula 2" style="max-width: 80%; max-height: 80vh; object-fit: contain;">                          
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
                Table Formula
            </a>

            <a
                href={TableImages1}
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
                            <title>Table Images</title>
                        </head>
                        <body style="margin: 0; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                            <a href="/rasmlar.zip" download="rasmlar.zip">Rasmlar ZIP faylini yuklab olish</a>
                            <img src="${TableImages1}" alt="Topshiriq">    
                            <img src="${TableImages2}" alt="Topshiriq">    
                            <img src="${TableImages3}" alt="Topshiriq">    
                            <img src="${TableImages4}" alt="Topshiriq">    
                            <img src="${TableImages5}" alt="Topshiriq">    
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
                Table Images
            </a>

            <a
                href={TableImages1}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                    e.preventDefault();
                    const yangiOyna = window.open('', '_blank');

                    // Rasmlar massivini HTML stringga aylantiramiz
                    const imagesHtml = images.map((rasm, idx) => `
                        <div style="margin-bottom: 20px; text-align: center;box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);">
                            <img src="${rasm}" alt="WordMundarija ${idx + 1}" style="max-width: 80%; height: auto; display: block; margin: 0 auto;">
                        </div>
                    `).join('');

                    yangiOyna.document.write(`
                        <!DOCTYPE html>
                        <html lang="uz">
                        <head>
                            <meta charset="UTF-8">
                            <title>Avtomatik mundarija yaratish</title>
                        </head>
                        <body style="margin: 0; padding: 20px; min-height: 50vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                            <a href="/Namuna.pdf" download="Namuna.pdf" style="margin-bottom: 20px; padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 5px;">Faylini yuklab olish</a>
                            <div style="width: 80%;">
                                ${imagesHtml}
                            </div>
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
                Avtomatik mundarija yaratish
            </a>
            <a
                href={TableImages1}
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
                            <title> Excel sum, Max, Min</title>
                        </head>
                        <body style="margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                            <img src="${ExcelMum1}" alt="Topshiriq">    
                            <img src="${ExcelMum2}" alt="Topshiriq">    
                            
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
               Excel sum, Max, Min
            </a>
            <a
                href={ExcelFoiz3}
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
                            <title> Excel Foiz</title>
                        </head>
                        <body style="margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                            <img src="${ExcelFoiz1}" alt="Topshiriq">    
                            <img src="${ExcelFoiz2}" alt="Topshiriq">    
                            <img src="${ExcelFoiz3}" alt="Topshiriq">                                
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
                Excel Foiz, absalyut belgisi
            </a>
        </div>
    );
}

export default App;