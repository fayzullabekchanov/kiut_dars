import React from 'react';
// import Sc5 from './Word/w7.mp4'
import Sc5 from './Word/WordTable.mp4'
// import Sc5 from './scratch_mushuk_sichqon.mp4'
// import Sc5 from './prip716.mp4'
// import Sc5 from './Media1.mp4';
// import Sc6 from './PRIP720.mp4';
// import Sc5 from './google.mp4';
const VideoPlayer = () => {
    return (
        <div>
            <tr>
                <td><h2>Prip-720U</h2>
                    <video width="800" controls>
                        <source src={Sc6} type="video/mp4"/>
                    </video>
                </td>
            </tr>


        </div>
    );
};

export default VideoPlayer;