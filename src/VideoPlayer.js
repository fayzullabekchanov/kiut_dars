import React from 'react';
// import Sc5 from './Word/Media1.mp4'
// import Sc5 from './Excel/excel.mp4'
// import Sc5 from './Excel/excel2.mp4'
// import Sc5 from './Word/WordTable.mp4'
// import Sc5 from './scratch_mushuk_sichqon.mp4'
// import Sc5 from './prip716.mp4'
// import Sc5 from './Ertak_kitob.mp4';
// import Sc6 from './PRIP720.mp4';
import Sc5 from './AMPS.mp4';
const VideoPlayer = () => {
    return (
        <tr>
            <td>
                {/*<h2>Prip-720U</h2>*/}
                <video width="800" controls>
                    <source src={Sc5} type="video/mp4"/>
                </video>
            </td>
        </tr>
    );
};

export default VideoPlayer;