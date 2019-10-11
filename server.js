const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer();
const fs = require('fs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post('/upload', upload.single('soundBlob'), (req, res) => {
  let uploadLocation = __dirname + '/public/uploads/' + req.file.originalname;

  fs.writeFileSync(uploadLocation,Buffer.from(new Uint8Array(req.file.buffer)));
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});