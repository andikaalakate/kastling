// express.js

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/login', (req, res) => {
    console.log({ request: req.body })
    res.send('Berhasil!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
