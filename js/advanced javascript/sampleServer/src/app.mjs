import express from 'express';
import fs from 'fs';

const DATA_DIR = 'myDB';

const app = express();
app.use(express.json());

const hashtable = {};

app.post('/memory/:key', (req, res) => {
  hashtable[req.params.key] = req.body.data;
  res.sendStatus(200);
});

app.get('/memory/:key', (req, res) => {
  const key = req.params.key;
  if (key in hashtable) {
    res.send(hashtable[key]);
    return;
  }
  res.send('null');
});

app.post('/disk/:key', (req, res) => {
  const destinationFile = `${DATA_DIR}/${req.params.key}`;
  const content = req.body.data;
  // fs.writeFileSync(destinationFile, req.body.data);
  try {
    fs.writeFileSync(destinationFile, content);
  } catch (e) {
    console.log('Cannot write file ', e);
  }
  res.send();
});

app.get('/disk/:key', (req, res) => {
  const destinationFile = `${DATA_DIR}/${req.params.key}`;
  try {
    const data = fs.readFileSync(destinationFile);
    res.send(data);
  } catch (error) {
    console.error('error', error);
    res.send('null');
  }
});

app.listen(3001, () => {
  console.log('listening on 3001');
});
