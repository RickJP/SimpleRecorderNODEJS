const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer();
const fs = require('fs');
const https = require('https');
const helmet = require("helmet");

app.use(express.static('public'));

app.use(helmet());

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post('/upload', upload.single('soundBlob'), (req, res) => {
  let uploadLocation = __dirname + '/public/uploads/' + req.file.originalname;

  fs.writeFileSync(uploadLocation,Buffer.from(new Uint8Array(req.file.buffer)));
  res.sendStatus(200);
});

app.listen(8080,'127.0.0.1', () => {
	console.log('Server running');
})
