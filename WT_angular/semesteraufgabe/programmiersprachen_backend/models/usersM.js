const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: String
});

module.exports = mongoose.model('User', schema);