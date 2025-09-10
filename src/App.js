import React from 'react';

import Worddagi1 from './w3.png'
import MyVideo from './w13.mp4';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';




function App() {
    return (
        <div className="App">

            <img src={Worddagi1} alt=""/>
            ------------------------Video Qo`llanma------------------------
            <video  controls>
                <source src={MyVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
             </div>

    );
}

export default App;