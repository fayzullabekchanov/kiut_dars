import React from 'react';
// import VideoPlayer from './VideoPlayer';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import  Im1 from './rasm1.png'
import  Im2 from './rasm2.png'
import  Im3 from './fon 1.svg'
import  Im4 from './fon 2.svg'
import  Im5 from './fon 3.svg'
import  Im6 from './fon 4.svg'



function App() {
    return (
        <div className="App">

            <h1>1-rasm</h1>
            <img src={Im1} height={800} alt=""/>
            <br/>
            <h1>2-rasm</h1>
            <img src={Im2} height={800} alt=""/>



               <a href={Im3} download > <button className="btn btn-success">Fon1</button></a>
               <a href={Im4} download > <button className="btn btn-success">Fon2</button></a>
               <a href={Im5} download > <button className="btn btn-success">Fon3</button></a>
               <a href={Im6} download > <button className="btn btn-success">Fon4</button></a>
{/*<VideoPlayer/>*/}
             </div>

    );
}

export default App;