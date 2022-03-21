const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    firstname: String,
    gender: String,
    url: String
});

module.exports = mongoose.model('Developer', schema);
