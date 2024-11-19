import React from 'react';

// import Sc5 from './AMPS.mp4';
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