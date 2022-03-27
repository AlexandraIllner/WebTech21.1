const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: String,
    name: String,
    firstname: String,
    gender: String,
    url: String
});

module.exports = mongoose.model('Developer', schema);
