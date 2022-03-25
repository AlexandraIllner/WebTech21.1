const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	name: String,
	token: String,
	year: String,
	paradigm: String,
	helloworld: String,
	info: String
});

module.exports = mongoose.model('Language', schema);
