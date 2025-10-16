import React from 'react';



import Worddagi1 from './excel1.0.png'
import Worddagi2 from './excel1.png'
import Worddagi3 from './EXCEL_BALL.png'
import Worddagi4 from './excel6.png'
import Worddagi5 from './excel2.png'
import Worddagi6 from './excel7.png'
import MyVideo from './Excel1.mp4'



import 'bootstrap/dist/css/bootstrap.css';
import './App.css';




function App() {

    return (


        <div className="App">

            <img src={Worddagi2} alt="rasmbor" width={900}/>
            ----------------------------------------------------------
            {/*<video  controls>*/}
            {/*    <source src={MyVideo}  type="video/mp4" />*/}
            {/*    Your browser does not support the video tag.*/}
            {/*</video>*/}

            <img src={Worddagi1} alt="rasmbor" width={900} />
            ----------------------------------------------------------
            <img src={Worddagi3}  alt="rasmbor" width={900} />
            ----------------------------------------------------------
            <img src={Worddagi4}  alt="rasmbor" width={900} />
            ----------------------------------------------------------
            <img src={Worddagi5}  alt="rasmbor" width={900} />

            ----------------------------------------------------------
            <img src={Worddagi6}  alt="rasmbor" width={900} />

            {/*<a href={MData}>Rasmlarni yuklab oling</a>*/}
            {/*------------------------------------------------*/}


        </div>


    );
}

export default App;