const express = require('express');
const cors = require('cors'); //für Anbindung an frontend
const routes = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const PORT = 3000;

app.use(express.json());
// enable cors for all requests für Anbindung frontend, geht auch (unten dann) für einzelne anfragen: app.get("/", cors(), (req, res) => { res.json({ message: "Hello FIW!" });});
app.use(cors()); 
app.use('/', routes);

// connect to mongoDB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://127.0.0.1:27017/members', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connected to DB');
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ... `);
    }
});
