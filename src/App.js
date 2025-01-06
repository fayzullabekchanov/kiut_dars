import React from 'react';
import VideoPlayer from './VideoPlayer';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import G1 from './w3.png'

function App() {
    return (
        <div className="App">


            <img src={G1} width={800} alt=" "/>
            {/*<a href={G1} download > <button className="btn btn-success">Download</button></a>*/}
           <br/>
            <h2>Video qo`llanma</h2>
            <VideoPlayer/>
        </div>

    );
}

export default App;
