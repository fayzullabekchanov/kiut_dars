import React from 'react';



import Worddagi1 from './excel1.png'
import Worddagi2 from './excel1.1.png'
import Worddagi3 from './excel1.0.png'


import 'bootstrap/dist/css/bootstrap.css';
import './App.css';




function App() {

    return (


        <div className="App">

            <img src={Worddagi1} alt="" width={1500}/>
            ---------------------------------
            <img src={Worddagi2} alt=""/>
            ---------------------------------
<h1>Rus tilida</h1>
            <img src={Worddagi3} alt="" />
            {/*<a href={MData}>Rasmlarni yuklab oling</a>*/}
            {/*------------------------------------------------*/}
            {/*<video  controls>*/}
            {/*    <source src={MyVideo} type="video/mp4" />*/}
            {/*    Your browser does not support the video tag.*/}
            {/*</video>*/}

        </div>


    );
}

export default App;