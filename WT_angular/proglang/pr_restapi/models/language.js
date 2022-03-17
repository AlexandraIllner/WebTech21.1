//(1) model für schema erstellen mit mongoose, ähnlich zu interface
const mongoose = require('mongoose');

//(1) mit schema-konstruktor modell erstellen
const schema = new mongoose.Schema({
    name: String,
    jahr: String,
    lizenz: String
});

//(1) ACHTUNG: mongoose erstellt, wenn es noch keine gibt, automatisch eine collection und nennt sie wie das model mit s hintendran
module.exports = mongoose.model('Language', schema);