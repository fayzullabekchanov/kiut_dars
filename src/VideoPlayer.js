import React from 'react';

import Sc5 from './APMS.mp4';
const VideoPlayer = () => {
    return (
        <tr>
            <td>
                <video width="800" controls>
                    <source src={Sc5} type="video/mp4"/>
                </video>
            </td>
        </tr>
    );
};

export default VideoPlayer;