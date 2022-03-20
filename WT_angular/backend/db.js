/* // connect to mongoDB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://127.0.0.1:27017/members', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connected to DB');
});

const mongoose = require('mongoose');
require('dotenv').config();

/* alte version vor users
// connect to mongoDB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => { console.log('connected to DB'); },
        err => { console.error.bind(console, 'connection error:') }
    );
const db = mongoose.connection;

module.exports = db; */

const mongoose = require('mongoose');
require('dotenv').config();

// connect to mongoDB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => { console.log('connected to DB'); },
        err => { console.error.bind(console, 'connection error:') }
    );
const db = mongoose.connection;

module.exports = db;

