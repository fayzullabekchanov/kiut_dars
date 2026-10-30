import React from 'react';
import { openViewer } from '../utils/openViewer';

import Rasm1 from './rasmlar/tfw.png';
import Rasm2 from './rasmlar/tfw_rus.jpg';
import Rasm3 from './rasmlar/word1.jpg';
import Rasm4 from './rasmlar/word2.jpg';
import Rasm5 from './rasmlar/Formulalar.jpg';
import Table1 from './rasmlar/t_1.jpg';
import Table2 from './rasmlar/t_2.jpg';
import Table3 from './rasmlar/t_3.jpg';
import Table4 from './rasmlar/t_4.jpg';
import Table5 from './rasmlar/t_5.jpg';
import TableFormula1 from './rasmlar/table1.png';
import TableFormula2 from './rasmlar/table1rus.png';
import TableImages1 from './rasmlar/ram_jadval1.png';
import TableImages2 from './rasmlar/ram_jadval2.png';
import TableImages3 from './rasmlar/ram_jadval3.png';
import TableImages4 from './rasmlar/ram_jadval4.png';
import TableImages5 from './rasmlar/ram_jadval5.png';
import WordNazorat1 from './rasmlar/WordSmartArt_Page_1.jpg';
import WordNazorat2 from './rasmlar/WordSmartArt_Page_2.jpg';
import WordMundarija1 from './rasmlar/Mundarija/1.jpg';
import WordMundarija2 from './rasmlar/Mundarija/2.jpg';
import WordMundarija3 from './rasmlar/Mundarija/3.jpg';
import WordMundarija4 from './rasmlar/Mundarija/4.jpg';
import WordMundarija5 from './rasmlar/Mundarija/5.jpg';
import WordMundarija6 from './rasmlar/Mundarija/6.jpg';
import WordMundarija7 from './rasmlar/Mundarija/7.jpg';
import WordMundarija8 from './rasmlar/Mundarija/8.jpg';
import WordMundarija9 from './rasmlar/Mundarija/9.jpg';

const TOPICS = [
    { label: 'Text Color',                   title: 'Text Color',                    images: [Rasm1, Rasm2] },
    { label: 'Table',                         title: 'Table',                         images: [Table1, Table2, Table3, Table4, Table5] },
    { label: 'SmartArt',                      title: 'SmartArt',                      images: [WordNazorat1, WordNazorat2] },
    { label: 'Shapes',                        title: 'Shapes',                        images: [Rasm3, Rasm4] },
    { label: 'Formulalar',                    title: 'Formulalar',                    images: [Rasm5] },
    { label: 'Table Formula',                 title: 'Table Formula',                 images: [TableFormula1, TableFormula2] },
    { label: 'Table Images',                  title: 'Table Images',                  images: [TableImages1, TableImages2, TableImages3, TableImages4, TableImages5] },
    { label: 'Avtomatik mundarija yaratish',  title: 'Avtomatik mundarija yaratish',  images: [WordMundarija1, WordMundarija2, WordMundarija3, WordMundarija4, WordMundarija5, WordMundarija6, WordMundarija7, WordMundarija8, WordMundarija9] },
];

export default function MsWord() {
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