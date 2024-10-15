import React from 'react';
import VideoPlayer from './VideoPlayer';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import G1f from './Word/w6.png';
import G2f from './Word/w66.png';
// import G4 from './Word/diag1.png';
// import G5 from './Word/diag2.png';
// import G4 from './Word/table.docx';
// import G4f from './Word/w6.png';
// import G4f from './Word/table1.png';
// import G5f from './Word/table2.png';
// import G6f from './Word/table3.png';
// import G1f from './mushuk_va_sichqon/1.png';
// import G2f from './mushuk_va_sichqon/2.png';
// import G4 from './AutoPlay_Media_Studio_v8.5.exe';


function App() {
    return (
        <div className="App">

            {/*<a href="https://cabinet.kiut.uz/" target="_blank">TEST</a>*/}
            {/*<a href="http://172.16.7.200" target="_blank">TEST</a>*/}

            <img src={G1f} width={900}  style={{boxShadow: '1px 2px 10px black', borderRadius: '20px', backgroundColor: "white"}} alt=" "/>
            <br/>
            shu jadvaldan diagrammalar yasang
             <img src={G2f} width={900}  style={{boxShadow: '1px 2px 10px black', borderRadius: '20px', backgroundColor: "white"}} alt=" "/>
            {/*<img src={G3f} width={900}  style={{boxShadow: '1px 2px 10px black', borderRadius: '20px', backgroundColor: "white"}} alt=" "/>*/}

            {/*<img src={G4f} width={900}  style={{boxShadow: '1px 2px 10px black', borderRadius: '20px', backgroundColor: "white"}} alt=" "/>*/}
            {/*<img src={G5f} width={900}  style={{boxShadow: '1px 2px 10px black', borderRadius: '20px', backgroundColor: "white"}} alt=" "/>*/}
            {/*<img src={G6f} width={900}  style={{boxShadow: '1px 2px 10px black', borderRadius: '20px', backgroundColor: "white"}} alt=" "/>*/}

            {/*Variant 1 <img src={G6f} width={900}  style={{boxShadow: '1px 2px 10px black', borderRadius: '20px', backgroundColor: "white"}} alt=" "/>*/}
            {/*Variant 2 <img src={G5f} width={900}  style={{boxShadow: '1px 2px 10px black', borderRadius: '20px', backgroundColor: "white"}} alt=" "/>*/}
            {/*Variant 3 <img src={G4f} width={900}  style={{boxShadow: '1px 2px 10px black', borderRadius: '20px', backgroundColor: "white"}} alt=" "/>*/}

            {/*<img src={G4} width={900}*/}
            {/*     style={{boxShadow: '1px 2px 10px black', borderRadius: '20px', backgroundColor: "white"}} alt=" "/>*/}
            {/*-----------------*/}
            {/*<img src={G5} width={900}*/}
            {/*     style={{boxShadow: '1px 2px 10px black', borderRadius: '20px', backgroundColor: "white"}} alt=" "/>*/}

            {/*<h1>Kuting tez orada chiqadi</h1>*/}

                        {/*<a href={G4} download >            <button className="btn btn-success">Download</button>            </a>*/}

            {/*<a href="http://172.16.7.200" target="_blank">Rams yasash</a>*/}
            {/*<a href="https://www.fotor.com/images/create" target="_blank">Rams yasash</a>*/}
            {/*<a href="https://heyzine.com/?hzpm=c1a4&gad_source=1&gclid=Cj0KCQjwr9m3BhDHARIsANut04Ywe31ZEDziO8clLUFZ1rxJRD8xZmvKsarpTntDWhm18fRe6ba0BeUaAvpfEALw_wcB"*/}
            {/*   target="_blank">Kitob yasash</a>*/}
            {/*<br/><br/><br/><br/><br/><br/>*/}
            <VideoPlayer/>
        </div>
    );
}

export default App;
