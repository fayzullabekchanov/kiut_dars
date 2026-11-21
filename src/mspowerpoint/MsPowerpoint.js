import React from 'react';
import { openViewer } from '../utils/openViewer';

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
            <a href="https://github.com/fayzullabekchanov/kiut_dars/releases/download/1.0/Taqdimot1.pptx" download className="btn btn-outline-info text-start">
                PowerPoint namuna 1 yuklab ol
            </a>

            <a href="https://github.com/fayzullabekchanov/kiut_dars/releases/download/1.0/kiut.zip" download className="btn btn-outline-info text-start">
                PowerPoint. Kelajagingni yarat (Создайте своё будущее).
            </a>
            <a href="https://github.com/fayzullabekchanov/kiut_dars/releases/download/1.0/photo.zip" download className="btn btn-outline-info text-start">
                PowerPoint topshiriq yuklab oling
            </a>
            <a
                href="https://github.com/fayzullabekchanov/kiut_dars/releases/download/1.0/SlideEconomy.zip"
                className="btn btn-outline-info text-start"
            >
                PowerPoint topshiriq(the economy) yuklab oling
            </a>



        </div>
    );
}

export default MSPowerpoint;
