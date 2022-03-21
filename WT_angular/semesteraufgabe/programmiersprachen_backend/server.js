const express = require('express');
const cors = require('cors');
const db = require('./db');
const noRoute = require('./routes/routes');
const routesDevelopers = require('./routes/developersR');
const routesLanguages = require('./routes/languagesR');
const routesUsers = require('./routes/usersR');
const initDB = require('./initdb');

const app = express();
const PORT = 3000;

app.use(express.json());
// enable cors for all requests TODO: sinnvoll für alle requests??? dann statt dem hier in anfrage app.get("/", cors(), (req, res)...
app.use(cors());
app.use('/initdb', initDB);
//app.use('/developers', developersRoute);
//app.use('/languages', languagesRoute);
app.use('/users', routesUsers);
app.use('/', noRoute);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ... `);
    }
});

