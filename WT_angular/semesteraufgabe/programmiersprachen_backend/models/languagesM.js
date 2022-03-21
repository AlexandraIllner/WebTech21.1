const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	name: String,
	year: String,
	paradigma: String,
	helloworld: String,
	text: String
});

module.exports = mongoose.model('Language', schema);
