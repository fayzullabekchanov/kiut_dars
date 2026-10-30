import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import MSExcel from './msexcel/MsExcel';
import MsWord from "./msword/MsWord";
import MsPowerpoint from "./mspowerpoint/MsPowerpoint";

function App() {
    // Qaysi sahifa ochiqligini saqlash uchun state ('home', 'excel', 'word')
    const [view, setView] = useState('home');
    const buttonStyle = {
        width: '400px', // Barcha tugmalar bir xil enkor bo'ladi
        padding: '12px 20px',
        fontSize: '16px',
        fontWeight: '500'
    };
    return (
        <div className="App container mt-5">
            {/* 1. Asosiy menyu (Home) */}
            {view === 'home' && (
                <div className="d-flex flex-column gap-3 align-items-center">
                    <a
                        href="#word"
                        className="btn btn-primary"
                        style={buttonStyle}
                        onClick={(e) => {
                            e.preventDefault();
                            setView('word');
                        }}
                    >
                        Word
                    </a>
                    <a
                        href="#excel"
                        className="btn btn-success"
                        style={buttonStyle}
                        onClick={(e) => {
                            e.preventDefault();
                            setView('excel');
                        }}
                    >
                        Excel
                    </a>
                    <a
                        href="#powerpoint"
                        className="btn btn-info"
                        style={buttonStyle}
                        onClick={(e) => {
                            e.preventDefault();
                            setView('powerpoint');
                        }}
                    >
                        PowerPoint
                    </a>
                </div>
            )}

            {/* 2. Excel sahifasi */}
            {view === 'excel' && (
                <div>
                    <button
                        className="btn btn-secondary mb-3"
                        style={buttonStyle}
                        onClick={() => setView('home')}
                    >
                        Orqaga qaytish
                    </button>
                    <MSExcel />
                </div>
            )}

            {/* 3. Word sahifasi */}
            {view === 'word' && (
                <div>
                    <button
                        className="btn btn-secondary mb-3"
                        style={buttonStyle}
                        onClick={() => setView('home')}
                    >
                        Orqaga qaytish
                    </button>
                    <MsWord />
                </div>
            )}
            {/* 4. PowerPoint sahifasi */}
            {view === 'powerpoint' && (
                <div>
                    <button
                        className="btn btn-secondary mb-3"
                        style={buttonStyle}
                        onClick={() => setView('home')}
                    >
                        Orqaga qaytish
                    </button>
                    <MsPowerpoint />
                </div>
            )}
        </div>
    );
}

export default App;