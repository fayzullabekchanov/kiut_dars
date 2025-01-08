import React from 'react';
// import VideoPlayer from './VideoPlayer';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
 import G1 from './w3.png'
//import G2 from './excel5.png'
//import G3 from './excel5j.png'

function App() {
    return (
        <div className="App">


       <img src={G1} width={800} alt=" "/>
            <img src={G2} width={800} alt=" "/>
            <br/>
            <h2>yechilish ketma ketligi</h2>
            <img src={G3} width={800} alt=" "/>
            {/*<a href={G1} download > <button className="btn btn-success">Download</button></a>*/}
            <br/>
         <h2>Video qo`llanma</h2>
            <VideoPlayer/>
        </div>

    );
}

export default App;
