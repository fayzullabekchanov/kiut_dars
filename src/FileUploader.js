// import React from 'react';
// import { useDropzone } from 'react-dropzone';
//
// const FileUploader = () => {
//     const onDrop = (acceptedFiles) => {
//         // Fayllarni qabul qilishdan so'ng kerakli logika
//         console.log(acceptedFiles);
//     };
//
//     const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
//
//     return (
//         <div {...getRootProps()} style={dropzoneStyle}>
//             <input {...getInputProps()} />
//             <p>{isDragActive ? 'Fayllarni bu yerga solishtiring' : 'Yoki bu yerga fayllarni solishtiring'}</p>
//         </div>
//     );
// };
//
// const dropzoneStyle = {
//     border: '2px dashed #0087F7',
//     borderRadius: '4px',
//     padding: '20px',
//     textAlign: 'center',
//     cursor: 'pointer',
// };
//
// export default FileUploader;


import React from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploader = () => {
    const onDrop = async (acceptedFiles) => {
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);

        try {
            const response = await fetch('http://localhost:3001/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            console.log('Serverdan qaytgan ma\'lumot:', data);
        } catch (error) {
            console.error('Xatolik yuz berdi:', error);
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} style={dropzoneStyle}>
            <input {...getInputProps()} />
            <p>{isDragActive ? 'Fayllarni bu yerga solishtiring' : 'Yoki bu yerga fayllarni solishtiring'}</p>
        </div>
    );
};

const dropzoneStyle = {
    border: '2px dashed #0087F7',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
};

export default FileUploader;

