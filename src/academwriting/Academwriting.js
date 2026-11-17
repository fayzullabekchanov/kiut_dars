
import React from 'react';
import { openViewer } from '../utils/openViewer';

import Academ1 from './rasmlar/imrad.jpeg';
import Academ2 from './rasmlar/IMRaD_shablon.pdf';
import Academ3 from './rasmlar/Shablon_Uz_rasm_Page_1.jpg';
import Academ4 from './rasmlar/Shablon_Uz_rasm_Page_2.jpg';
import Academ5 from './rasmlar/shablon_maqola.zip';

const TOPICS = [
    {
        label: 'IMRAD nima',
        title: 'IMRAD nima',
        images: [Academ1],
        files: [
            { name: 'IMRaD shablon.pdf', url: Academ2 }
        ]
    },
    {
        label: 'Maqola yozish',
        title: 'Maqola yozish',
        images: [Academ3, Academ4],
        files: [
            { name: 'Maqola shabloni.zip', url: Academ5 }
        ]
    }
];

function Academwriting() {
    return (
        <div className="d-flex flex-column gap-2 p-3">
            {TOPICS.map(({ label, title, images, files }) => (
                <div key={label} className="border rounded p-3">
                    <button
                        type="button"
                        className="btn btn-outline-primary text-start w-100"
                        onClick={() => openViewer(title, images)}
                    >
                        {label}
                    </button>

                    <div className="mt-2">
                        {files.map((file) => (
                            <a
                                key={file.name}
                                href={file.url}
                                download
                                className="btn btn-sm btn-success me-2"
                            >
                                <i className="bi bi-download"></i>
                                {' '} {file.name} yuklab olish
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Academwriting;
