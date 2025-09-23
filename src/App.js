import React from 'react';


import Worddagi1 from './v2.jpg'
import Worddagi2 from './v3.jpg'
import Worddagi3 from './v4.jpg'
import Worddagi4 from './v5.jpg'

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';




function App() {
    return (
        <div className="App">
            <h1>Faqat bitta variantini tanlang</h1>
            <img src={Worddagi1} alt=""/>
            ------------------------   ------------------------   ------------------------   ------------------------
            <img src={Worddagi2} alt=""/>
            ------------------------   ------------------------   ------------------------   ------------------------
            <img src={Worddagi3} alt=""/>
            ------------------------   ------------------------   ------------------------   ------------------------
            <img src={Worddagi4} alt=""/>
            {/*------------------------Video Qo`llanma------------------------*/}
            {/*<video  controls>*/}
            {/*    <source src={MyVideo} type="video/mp4" />*/}
            {/*    Your browser does not support the video tag.*/}
            {/*</video>*/}
             </div>

    );
}

export default App;