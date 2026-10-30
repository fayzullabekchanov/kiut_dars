import React from 'react';

import ExcelMum1 from './excel1.0.png';
import ExcelMum2 from './excel1.1.jpg';

import ExcelFoiz1 from './ExcelFoiz1.png';
import ExcelFoiz2 from './ExcelFoiz2.png';
import ExcelFoiz3 from './ExcelFoizN.png';

import ExcelFormula1 from './ExcelSum.png';

import ExcelMasala1 from './Excel2_ombor.jpg';

import ExcelIf1 from './EXCEL_BALL.png';

import ExceGPA1 from './excelSumProductIf1.png';

import ExceFiltirlash1 from './Excel_subtotal1.png';
import ExceFiltirlash2 from './Excel_subtotal2.jpg';

import ExcelDiagram1 from './diagrammadinamik1.png';
import ExcelDiagram2 from './diagrammadinamik2.png';

import ExceMustaqil1 from './excel3.png';

import ExcelText1 from './excelText1.png';
import ExcelText2 from './excelText2.png';

import ExcelMedNazorat from './ExcelNazorat_med_new.jpg';



function MSExcell() {
    return (
        <div className="App">
            <a
                href={ExcelMum1}
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
                            <title> Excel Formula</title>
                        </head>
                        <body style="margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                            <img src="${ExcelFormula1}" alt="Topshiriq">    
                                                           
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
                Excel Formula
            </a>
            <a
                href={ExcelMasala1}
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
                            <title> Excel Formula</title>
                        </head>
                        <body style="margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                            <img src="${ExcelMasala1}" alt="Topshiriq">    
                                                           
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
                Excel mustaqil ishlash uchun
            </a>
            <a
                href={ExcelIf1}
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
                            <title> Excel IF</title>
                        </head>
                        <body style="margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                            <img src="${ExcelIf1}" alt="Topshiriq">    
                                                           
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
                Excel shartga tekshirish(if)
            </a>
            <a
                href={ExceGPA1}
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
                            <title> Excel GPA</title>
                        </head>
                        <body style="margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                            <img src="${ExceGPA1}" alt="Topshiriq">    
                                                           
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
                Excel GPA
            </a>

            <a
                href={ExceFiltirlash1}
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
                            <title> Excel Filtirlash</title>
                        </head>
                        <body style="margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                            <img src="${ExceFiltirlash1}" alt="Topshiriq">    
                            <img src="${ExceFiltirlash2}" alt="Topshiriq">    
                                                           
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
                Excelda matematik ma’lumotlarni saralash, filtrlash
            </a>

            <a
                href={ExceMustaqil1}
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
                            <title> Excel Filtirlash</title>
                        </head>
                        <body style="margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                            <img src="${ExceMustaqil1}" alt="Topshiriq">    
                                                                                  
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
                Excelda Mustaqil yechish
            </a>

            <a
                href={ExceMustaqil1}
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
                            <title> Excel if</title>
                        </head>
                        <body style="margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                            <img src="${ExcelText1}" alt="Topshiriq">    
                            <img src="${ExcelText2}" alt="Topshiriq">    
                                                                                  
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
                Excelda Shart, Matn sanashlar bilan ishlash
            </a>

            <a
                href={ExcelDiagram1}
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
                            <title> Excel Diagramma, random </title>
                        </head>
                        <body style="margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                            <img src="${ExcelDiagram1}" alt="Topshiriq">    
                            <img src="${ExcelDiagram2}" alt="Topshiriq">    
                                                                                  
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
                Excel Diagramma, random, VLOOKUP, ro`yxat
            </a>
            <a
                href={ExcelMedNazorat}
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
                            <title> Excel Diagramma, random </title>
                        </head>
                        <body style="margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                            <img src="${ExcelMedNazorat}" alt="Topshiriq">    
                                                                                                            
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
                Excel Medisina Nazorat ishi
            </a>
            {/* Uncomment other links as needed */}
        </div>
    );
}

export default MSExcell;