// db.js
import mysql from "mysql";

const conn = mysql.createConnection({
    host: "localhost",
    user: "gadakst2_andikaalakate",
    password: "mraouart46710_~",
    database: "gadakst2_kastling_latihan",
});

conn.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

export default conn;
