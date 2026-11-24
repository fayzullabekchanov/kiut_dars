import React from 'react';
import { openViewer } from '../utils/openViewer';
import Infografika1 from './statisv.jpg';

const TOPICS = [
    // Infografika hozircha comment qilingan — qoldirildi
    { label: 'Infografika', title: 'Infografika', images: [Infografika1] },
];

function Infografika() {

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


        </div>
    );
}

export default Infografika;
