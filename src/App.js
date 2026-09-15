import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import Rasm1 from './tfw.png';
// import Rasm1 from './t_1.jpg';
// import Rasm2 from './obyektivka2.png';
// import Rasm3 from './obyektivka3.png';
// import Rasm4 from './t_4.jpg';
// import Rasm5 from './t_5.jpg';

function App() {

    return (
        <div className="App">

            <img src={Rasm1} width={500} alt=""/>
            {/*<img src={Rasm2} width={500} alt=""/>*/}
            {/*<img src={Rasm3} width={500} alt=""/>*/}
            {/*<img src={Rasm4} width={500} alt=""/>*/}
            {/*<img src={Rasm5} width={500} alt=""/>*/}
        </div>
    );
}

export default App;
