const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema
const BookSchema = new Schema({
	title: String,
	pages: Number
});

const AuthorSchema = new Schema({
	name: String,
	books: [BookSchema]
});

const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;