const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    vorname: String,
    gender: String,
    url: String
});

module.exports = mongoose.model('Dev', schema);
