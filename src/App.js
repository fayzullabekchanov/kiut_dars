
import React from 'react';
import VideoPlayer from './VideoPlayer';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import G1f from './excel5.png'
function App() {
    return (
        <div className="App">


            <img src={G1f} width={800} alt=" "/>

            {/*<a href={G4} download > <button className="btn btn-success">Download</button></a>*/}
        <h2>Video</h2>
            <VideoPlayer/>
        </div>

    );
}

export default App;
