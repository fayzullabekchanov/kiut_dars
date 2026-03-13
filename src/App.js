import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// import Worddagi6 from './nazoratishi.png'
import Worddagi1 from './excel3_qadam1.png'
import Worddagi2 from './excel3_qadam2.png'
import Worddagi3 from './excel3_qadam3.png'
import Worddagi4 from './excel3_qadam4.png'
import Worddagi5 from './excel3_natija.png'


function App() {

    return (
        <div className="App">

{/*           <h1>Nazorat ishi </h1>*/}
{/*            <img src={Worddagi6} alt=""/>*/}
{/*<br/>*/}
{/*<br/>*/}
{/*<br/>*/}
{/*<br/>*/}
{/*<br/>*/}
{/*<br/>*/}
{/*<br/>*/}
{/*            ---------------------------------------------------------*/}
 <h1>1-qadam Excelda shu jadvallarni yaratamiz </h1>
            <img src={Worddagi1} alt=""/>

            <h1>2-qadam jadvalga formulalarni kiritamiz </h1>
            <img src={Worddagi2} alt=""/>

            <h1>3-qadam jadvalga formulalarni kiritamiz </h1>
            <img src={Worddagi3} alt=""/>

            <h1>4-qadam qizil bilan belgilangan jadvaldagi kataklarga formulalarni kiritamiz </h1>
            <img src={Worddagi4} alt=""/>

            <h1>Sizning natijangiz quyidagicha bo`lishi kerak </h1>
            <img src={Worddagi5} alt=""/>

        </div>
    );
}
export default App;
