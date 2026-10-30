import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import MSExcel from './msexcel/MsExcel';
import MsWord from './msword/MsWord';
import MsPowerpoint from './mspowerpoint/MsPowerpoint';
import MSaccess from "./msaccess/MSaccess";

const VIEWS = {
    home: null,
    excel: MSExcel,
    word: MsWord,
    powerpoint: MsPowerpoint,
    msaccess:MSaccess,
};

const BTN_STYLE = { width: '400px', padding: '12px 20px', fontSize: '16px', fontWeight: '500' };

const MENU_ITEMS = [
    { view: 'word',        label: 'Word',       cls: 'btn-info'   },
    { view: 'excel',       label: 'Excel',      cls: 'btn-info'  },
    { view: 'powerpoint',  label: 'PowerPoint', cls: 'btn-info'      },
    { view: 'msaccess',  label: 'MS Access', cls: 'btn-info'      },
];

function App() {
    const [view, setView] = useState('home');
    const ActiveComponent = VIEWS[view];

    return (
        <div className="App container mt-5">
            {view === 'home' ? (
                <div className="d-flex flex-column gap-3 align-items-center">
                    {MENU_ITEMS.map(({ view: v, label, cls }) => (
                        <button
                            key={v}
                            className={`btn ${cls}`}
                            style={BTN_STYLE}
                            onClick={() => setView(v)}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            ) : (
                <div>
                    <button className="btn btn-secondary mb-3" style={BTN_STYLE} onClick={() => setView('home')}>
                        Orqaga qaytish
                    </button>
                    {ActiveComponent && <ActiveComponent />}
                </div>
            )}
        </div>
    );
}

export default App;