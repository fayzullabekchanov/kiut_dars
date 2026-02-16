import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Worddagi1 from './m1.png'
import Worddagi2 from './m2.png'
import Worddagi3 from './m3.png'
import Worddagi4 from './m4.png'

function App() {

    return (
        <div className="App">
            <img src={Worddagi1} width={900} alt=""/>
            <img src={Worddagi2} width={900} alt=""/>
            <img src={Worddagi3} width={900} alt=""/>
            <img src={Worddagi4} width={900} alt=""/>



            {/*<video  controls>*/}
            {/*    <source src={MyVideo}  type="video/mp4" />*/}
            {/*    Your browser does not support the video tag.*/}
            {/*</video>*/}
        </div>
    );
}
export default App;
