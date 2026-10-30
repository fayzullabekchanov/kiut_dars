import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import MSExcel from './msexcel/MsExcel';
import MsWord from "./msword/MsWord";

function App() {
    // Qaysi sahifa ochiqligini saqlash uchun state ('home', 'excel', 'word')
    const [view, setView] = useState('home');

    return (
        <div className="App container mt-5">
            {/* 1. Asosiy menyu (Home) */}
            {view === 'home' && (
                <div className="d-flex flex-column gap-3 align-items-center">
                    <a
                        href="#word"
                        className="btn btn-primary"
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
                        onClick={(e) => {
                            e.preventDefault();
                            setView('excel');
                        }}
                    >
                        Excel
                    </a>
                </div>
            )}

            {/* 2. Excel sahifasi */}
            {view === 'excel' && (
                <div>
                    <button
                        className="btn btn-secondary mb-3"
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
                        onClick={() => setView('home')}
                    >
                        Orqaga qaytish
                    </button>
                    <MsWord />
                </div>
            )}
        </div>
    );
}

export default App;