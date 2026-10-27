import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Taqdimot from './Taqdimot1.pptx';


function App() {
    return (
        <div className="App" style={{ padding: '40px', display: 'flex', justifyContent: 'space-around' }}>
            {/*<div>*/}
            {/*    <WordLinks />*/}
            {/*</div>*/}
            {/*<div style={{ borderLeft: '2px solid #ccc', paddingLeft: '40px' }}>*/}
            {/*    <ExcelLinks />*/}
            {/*</div>*/}
            <a href={Taqdimot}>Yukla</a>
        </div>
    );
}

export default App;