const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3001;

// Fayllar qo'llash uchun saqlash joyi
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

// Fayl yuklash uchun endpoint
app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ filename: req.file.filename });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
