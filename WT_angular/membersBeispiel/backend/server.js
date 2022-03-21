const express = require('express');
const cors = require('cors');

const db = require('./db');
// für members
const routesMembers = require('./routes/membersR');
// für users
const routesUsers = require('./routes/users');
// für users, skript zum befüllen der db
const initDB = require('./initdb');

const app = express();
const PORT = 3000;

app.use(express.json());
// enable cors for all requests
app.use(cors());
app.use('/initdb', initDB);
app.use('/members', routesMembers);
// für users
app.use('/users', routesUsers);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ... `);
    }
});

/* const express = require('express');
const cors = require('cors'); //für Anbindung an frontend
const db = require('./db');
const routesMembers = require('./routes/members.route');
const routesUsers = require('./routes/users.route');
//const mongoose = require('mongoose');
const initDB = require('./initdb');

require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());
// enable cors for all requests für Anbindung frontend, geht auch (unten dann) für einzelne anfragen: app.get("/", cors(), (req, res) => { res.json({ message: "Hello FIW!" });});
app.use(cors()); 
//app.use('/', routes);
// für aufruf zum befüllen der members collection
app.use('/initdb', initDB);
app.use('/members', routesMembers);
app.use('/users', routesUsers);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ... `);
    }
}); */



