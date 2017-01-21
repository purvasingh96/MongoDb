const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema and model

//schema
const MarioCharSchema = new Schema({
	name: String
	
});

//model
const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;