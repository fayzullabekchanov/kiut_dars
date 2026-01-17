import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Worddagi1 from './1.PNG'
import Worddagi2 from './2.PNG'
import Worddagi3 from './3.png'





function App() {

    return (


        <div className="App">


            <h1>Mushuk</h1>
            <img src={Worddagi1} width={900} alt=""/>
            <h1>Sichqon</h1>

            <img src={Worddagi2} width={900} alt=""/>
            <h1>Bombacha</h1>
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