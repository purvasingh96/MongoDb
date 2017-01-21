//connecting to db
const mongoose = require('mongoose');

//ES6 promises
mongoose.Promise = global.Promise;

//connect to the db before test run
before(function(done){
	//connect to mongodb
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', function(){
	console.log('connection has been made.');
	done();
}).on('error', function(error){
	console.log('connection error', error);
});
});

//drop the charecters collection before each test

beforeEach(function(done){

	//drop the collection
	mongoose.connection.collections.mariochars.drop(function(){
		done();
	});
});

