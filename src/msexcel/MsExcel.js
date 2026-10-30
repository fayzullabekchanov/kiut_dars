import React from 'react';
import { openViewer } from '../utils/openViewer';

import ExcelMum1 from './rasmlar/excel1.0.png';
import ExcelMum2 from './rasmlar/excel1.1.jpg';
import ExcelFoiz1 from './rasmlar/ExcelFoiz1.png';
import ExcelFoiz2 from './rasmlar/ExcelFoiz2.png';
import ExcelFoiz3 from './rasmlar/ExcelFoizN.png';
import ExcelFormula1 from './rasmlar/ExcelSum.png';
import ExcelMasala1 from './rasmlar/Excel2_ombor.jpg';
import ExcelIf1 from './rasmlar/EXCEL_BALL.png';
import ExceGPA1 from './rasmlar/excelSumProductIf1.png';
import ExceFiltirlash1 from './rasmlar/Excel_subtotal1.png';
import ExceFiltirlash2 from './rasmlar/Excel_subtotal2.jpg';
import ExcelDiagram1 from './rasmlar/diagrammadinamik1.png';
import ExcelDiagram2 from './rasmlar/diagrammadinamik2.png';
import ExceMustaqil1 from './rasmlar/excel3.png';
import ExcelText1 from './rasmlar/excelText1.png';
import ExcelText2 from './rasmlar/excelText2.png';
import ExcelMedNazorat from './rasmlar/ExcelNazorat_med_new.jpg';

const TOPICS = [
    { label: 'Excel sum, Max, Min',                               title: 'Excel sum, Max, Min',            images: [ExcelMum1, ExcelMum2] },
    { label: 'Excel Foiz, absalyut belgisi',                      title: 'Excel Foiz',                     images: [ExcelFoiz1, ExcelFoiz2, ExcelFoiz3] },
    { label: 'Excel Formula',                                     title: 'Excel Formula',                  images: [ExcelFormula1] },
    { label: 'Excel mustaqil ishlash uchun',                      title: 'Excel mustaqil',                 images: [ExcelMasala1] },
    { label: 'Excel shartga tekshirish (IF)',                     title: 'Excel IF',                       images: [ExcelIf1] },
    { label: 'Excel GPA',                                         title: 'Excel GPA',                      images: [ExceGPA1] },
    { label: "Excelda matematik ma'lumotlarni saralash, filtrlash", title: 'Excel Filtirlash',             images: [ExceFiltirlash1, ExceFiltirlash2] },
    { label: 'Excelda Mustaqil yechish',                          title: 'Excel mustaqil yechish',         images: [ExceMustaqil1] },
    { label: 'Excelda Shart, Matn sanashlar bilan ishlash',       title: 'Excel Shart & Matn',             images: [ExcelText1, ExcelText2] },
    { label: "Excel Diagramma, random, VLOOKUP, ro'yxat",         title: 'Excel Diagramma',               images: [ExcelDiagram1, ExcelDiagram2] },
    { label: 'Excel Medisina Nazorat ishi',                       title: 'Excel Med Nazorat',              images: [ExcelMedNazorat] },
];

function MSExcell() {
    return (
        <div className="d-flex flex-column gap-2 p-3">
            {TOPICS.map(({ label, title, images }) => (
                <button
                    key={label}
                    className="btn btn-outline-success text-start"
                    onClick={() => openViewer(title, images)}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}

export default MSExcell;