import React from 'react';
import { openViewer } from '../utils/openViewer';

import Taqdimot1 from './Taqdimot1.pptx';
import Taqdimot2 from './photo.zip';


const TOPICS = [
    // Infografika hozircha comment qilingan — qoldirildi
    // { label: 'Infografika', title: 'Infografika', images: [Infografika] },
];

function MSPowerpoint() {

    return (
        <div className="d-flex flex-column gap-2 p-3">
            {TOPICS.map(({ label, title, images }) => (
                <button
                    key={label}
                    className="btn btn-outline-info text-start"
                    onClick={() => openViewer(title, images)}
                >
                    {label}
                </button>
            ))}

            {/* PPTX yuklab olish — openViewer bu yerda ishlamaydi, to'g'ridan-to'g'ri link */}
            <a href={Taqdimot1} download className="btn btn-outline-info text-start">
                PowerPoint namuna 1 yuklab ol
            </a>
            <a href={Taqdimot2} download className="btn btn-outline-info text-start">
                PowerPoint topshiriq va rasmlarni yuklab oling
            </a>



        </div>
    );
}

export default MSPowerpoint;