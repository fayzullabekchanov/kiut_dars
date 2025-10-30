import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Worddagi1 from './excel3.1.png'
import Worddagi2 from './excel3.2.png'











function App() {

    return (


        <div className="App">
RUSCHA OFFICE UCHUN <br/>
            -------------------------------------------------------
            <img src={Worddagi1} alt="rasmbor" width={900}/>
            INGILIZCHA OFFICE UCHUN<br/>
            -------------------------------------------------------
            <img src={Worddagi2} alt="rasmbor" width={900}/>
            {/*<a href={Worddagi1}>Yuklab oling</a>*/}
            -------------------------------------------------------

            {/*<video  controls>*/}
            {/*    <source src={MyVideo}  type="video/mp4" />*/}
            {/*    Your browser does not support the video tag.*/}
            {/*</video>*/}




        </div>


    );
}

export default App;