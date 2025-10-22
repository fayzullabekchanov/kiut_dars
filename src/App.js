import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Worddagi1 from './excel1.png'
import Worddagi2 from './excel1.1.png'
import MyVideo from './Excel1.mp4'









function App() {

    return (


        <div className="App">

            <img src={Worddagi1} alt="rasmbor" width={900}/>
            <img src={Worddagi2} alt="rasmbor" width={900}/>

            <video  controls>
                <source src={MyVideo}  type="video/mp4" />
                Your browser does not support the video tag.
            </video>




        </div>


    );
}

export default App;