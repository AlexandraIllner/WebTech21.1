const express = require('express'); //(1)express importieren
const routes = require('./routes'); //(2)routes.js importieren
const mongoose = require('mongoose'); //(4)mongoose zur MonoDB-Verwaltung importieren
require('dotenv').config(); //(5)config() liest .env.Datei ein, auf die unten mit process.env.<Schlüssel>
//zugegriffen wird


const app = express(); //(1)express-objekt erzeugen und in var app speichern
const PORT = 3001; //(1)port-nummer festlegen (wählbar), backend unter http://localhost:3000 verfügbar

app.use(express.json()); //(2)hier wird festgelegt, dass alle JS-Objekte nach JSON umgewandelt werden
app.use('/', routes); // (2)Verwendung von routes

// (4)connect to mongoDB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
// hier vor .env: 
//mongoose.connect('mongodb://127.0.0.1:27017/devs', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connected to DB');
});

//(1)hier starten des webservers durch aufruf von listen()-fkt von express, näheres im howto
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ... `);
    }
});
