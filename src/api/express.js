import express from 'express';
import bodyParser from 'body-parser';
import conn from '../sql/conn.js'

const app = express();
const port = 3000;

app.use(bodyParser.json())

app.get('/', (req, res) => {
    conn.query("SELECT * FROM admin", (gagal, berhasil) => {
        console.log(berhasil)
        res.send(berhasil);
    })
});

app.get('/get', (req, res) => {
    conn.query("SELECT * FROM admin", (gagal, berhasil) => {
        console.log(berhasil)
        res.send(berhasil);
    })
});

app.post('/post', (req, res) => {
    const { username, password, level } = req.body;
    const sql = 'INSERT INTO admin (username, password, level) VALUES (?, ?, ?)';
    const values = [username, password, level];

    // Insert a new user into the database
    conn.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error ketika koneksi ke database:', err);
            res.status(500).json({ error: 'Error ketika menginput data ke databse' });
            return;
        }
        console.log('Admin baru telah bertambah ke dalam database dengan ID:', result.insertId);
        res.status(201).json({ message: 'Admin berhasil ditambahkan ke database', userId: result.insertId });
    });
});

// app.put('/put', (req, res) => {

// });

// app.delete('/del', (req, res) => {

// });

app.post('/login', (req, res) => {
    console.log({ request: req.body })
    res.send('Berhasil!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});