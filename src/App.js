import React from 'react';
// import VideoPlayer from './VideoPlayer';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import  Im1 from './1.png'
import  Im2 from './2.png'
import  Im3 from './3.png'
import  Im4 from './4.png'

function App() {
    return (
        <div className="App">

            <h1>1-rasm</h1>
            <img src={Im1} alt=""/>
            <br/>
            <h1>2-rasm</h1>
            <img src={Im2} alt=""/>
            <img src={Im3} alt=""/>
            <h1>3-rasm</h1>
            <br/>
            <img src={Im4} alt=""/>



            {/*   <a href={G1} download > <button className="btn btn-success">Download</button></a> */}
{/*<VideoPlayer/>*/}
             </div>

    );
}

export default App;