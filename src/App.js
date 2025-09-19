import React from 'react';

import Worddagi1 from './jadval.png'
import Worddagi2 from './wtable.png'
// import Worddagi2 from './v4.jpg'
// import Worddagi3 from './v5.jpg'
// import Worddagi4 from './w3.png'
// import MyVideo from './w13.mp4';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';




function App() {
    return (
        <div className="App">

            <img src={Worddagi1} alt=""/>
            ------------------------   ------------------------   ------------------------   ------------------------
            <img src={Worddagi2} alt=""/>
            {/*------------------------   ------------------------   ------------------------   ------------------------*/}
            {/*<img src={Worddagi3} alt=""/>*/}
            {/*------------------------   ------------------------   ------------------------   ------------------------*/}
            {/*<img src={Worddagi4} alt=""/>*/}
            {/*------------------------Video Qo`llanma------------------------*/}
            {/*<video  controls>*/}
            {/*    <source src={MyVideo} type="video/mp4" />*/}
            {/*    Your browser does not support the video tag.*/}
            {/*</video>*/}
             </div>

    );
}

export default App;