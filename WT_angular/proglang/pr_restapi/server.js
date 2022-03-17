
//(0) express importieren nach installation, stellt web-framework zur verfügung
const express = require('express');
//(0) routes.js-modul mit allen dort definierten routen einbinden
const routes = require('./routes');
//(1) mongoose als 'mongodb' einbinden nach inst., um verbindung zu mongodb herzustellen
const mongodb = require('mongoose');
//(1) .env nach inst. & erstellen importieren und konfiguration aufrufen: sucht nach process.env.SCHLÜSSEL
require('dotenv').config();
//(3) damit frontend und backend zusammenarbeiten können muss cors installiert und importiert werden
const cors = require('cors');


//(0) app: var für express-objekt, das hier erzeugt wird
const app = express();
//(0) port definieren
const PORT = 3000;

//(0) alle responses werden in json umgewandelt
app.use(express.json());
//(3) enable cors for all requests
app.use(cors());
//(0) startpunkt für die hier definierten routen (es kann verschiedene routes-dateien geben für z.b. user...)
app.use('/', routes);


//(1) connect to mongoDB spr --> vor .env: mongodb.connect('mongodb://127.0.0.1:27017/spr', { useNewUrlParser: true, useUnifiedTopology: true });
//(1) nach .env:
mongodb.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
//(1) nicht unbedingt nötig, erleichtert aber zugriff für kontrolle, siehe unten db.fkt
const db = mongodb.connection;
db.on('error', console.error.bind(console, 'connection error:'));
//(1) () ist 2. parameter und 1 anonyme fkt in arrow-notation ohne params, gefolgt vom fkt-körper
db.once('open', () => {
    console.log('connected to DB');
});


//(0) app.listen() startet web-server unter dem angegebenen port
// wie oben, aber: wo kommt error eigentlich her???
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ... `);
    }
});
