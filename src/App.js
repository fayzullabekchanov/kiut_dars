import React from 'react';



// import Worddagi1 from './IMG_2644.jpg'
import Worddagi2 from './excel1.png'
import Worddagi3 from './EXCEL_BALL.png'
import Worddagi4 from './excel6.png'



import 'bootstrap/dist/css/bootstrap.css';
import './App.css';




function App() {

    return (


        <div className="App">

            {/*<img src={Worddagi1}/>*/}
            {/*----------------------------------------------------------*/}

            <img src={Worddagi2} width={900} />
            ----------------------------------------------------------
            <img src={Worddagi3}  width={900} />
            ----------------------------------------------------------
            <img src={Worddagi4}  width={900} />
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