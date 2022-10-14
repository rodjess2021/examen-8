const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const Songs = require('./api/songs');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/api/songs', Songs);

mongoose.connect(
    "mongodb://localhost/usuarios",
    {songNewUrlParser: true},
    (err, res) => {
        err && console.log("Error conectando a la bd");
        app.listen(4000,() => {
            console.log("Servidor corriendo en http://localhost:4000");
        })
    }
)
