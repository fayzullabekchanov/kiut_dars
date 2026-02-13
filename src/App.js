import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Worddagi1 from './t1.png'
import Worddagi2 from './t2.png'
import Worddagi3 from './t3.png'
function App() {

    return (
        <div className="App">
            <img src={Worddagi1} width={900} alt=""/>
            <img src={Worddagi2} width={900} alt=""/>
            <img src={Worddagi3} width={900} alt=""/>
            {/*<a href={Worddagi1}>Yuklab oling</a>*/}
            {/*<video  controls>*/}
            {/*    <source src={MyVideo}  type="video/mp4" />*/}
            {/*    Your browser does not support the video tag.*/}
            {/*</video>*/}
        </div>
    );
}
export default App;
