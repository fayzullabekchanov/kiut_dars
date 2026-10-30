import React from 'react';
import { openViewer } from '../utils/openViewer';
import  MSaccess1 from './rasmlar/access_Page_1.jpg';
import  MSaccess2 from './rasmlar/access_Page_2.jpg';
import  MSaccess3 from './rasmlar/access_Page_3.jpg';


const TOPICS = [
    // Infografika hozircha comment qilingan — qoldirildi
    { label: 'MS Access jadval yaratish', title: 'MS Access jadval yaratish', images: [MSaccess1,MSaccess2,MSaccess3] },

];

function MSaccess() {
    return (
        <div className="d-flex flex-column gap-2 p-3">
            {TOPICS.map(({ label, title, images }) => (
                <button
                    key={label}
                    className="btn btn-outline-primary text-start"
                    onClick={() => openViewer(title, images)}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}

export default MSaccess;