import React from 'react';

import Infografika from './statisv.jpg';

import Taqdimot1 from './Taqdimot1.pptx';



function MSPowerpoint() {
    return (
        <div className="App">
            {/*<a*/}
            {/*    href={Infografika}*/}
            {/*    target="_blank"*/}
            {/*    rel="noreferrer"*/}
            {/*    onClick={(e) => {*/}
            {/*        e.preventDefault();*/}
            {/*        const yangiOyna = window.open('', '_blank');*/}
            {/*        yangiOyna.document.write(`*/}
            {/*            <!DOCTYPE html>*/}
            {/*            <html lang="uz">*/}
            {/*            <head>*/}
            {/*                <meta charset="UTF-8">*/}
            {/*                <title> Infografika</title>*/}
            {/*            </head>*/}
            {/*            <body style="margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">*/}
            {/*                <img src="${Infografika}" alt="Topshiriq">*/}
            {/*            </body>*/}
            {/*            </html>*/}
            {/*        `);*/}
            {/*        yangiOyna.document.close();*/}
            {/*    }}*/}
            {/*>*/}
            {/*    Infografika*/}
            {/*</a>*/}
            <a
                href={Taqdimot1}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                    e.preventDefault();
                    const yangiOyna = window.open('', '_blank');
                    yangiOyna.document.write(`
                        <!DOCTYPE html>
                        <html lang="uz">
                        <head>
                            <meta charset="UTF-8">
                            <title> powerpoint1</title>
                        </head>
                        <body style="margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
                            <img src="${Infografika}" alt="Topshiriq">
                        </body>
                        </html>
                    `);
                    yangiOyna.document.close();
                }}
            >
                PowerPoint namuna 1 yuklab ol
            </a>
        </div>
    );
}

export default MSPowerpoint;