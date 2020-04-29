const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "rukaren.cafe24.com",
    user: "rukaren",
    password: "rkerke3679@",
    port: "3306",
    database: "rukaren"
});

connection.connect(err => {
    if(err) {
        return err;
    }
});



app.get('/', (req, res) => {
    res.send('go to /projectdb to see project');
    
    console.log("it's god");
    /*connection.query(

        'SELECT * FROM CUSTOMER',

        (err, rows, fields) => {

        res.send(rows);

        }

    )*/

});



app.listen(5000, () => console.log(`Listening on port ${port}`));
