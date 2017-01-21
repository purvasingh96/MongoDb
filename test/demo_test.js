const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../model/mariochar.js');

//describe tests
describe("Saving records", function(){

	//create tests
	it("save records to database", function(done){
		
		var char = new MarioChar({
			name: 'Mario'
		}
		);
		
		//saves directly to database
		//save is async request
		//then returns promise

		char.save().then(function(){
			//boolean, true if created char but not saved to db
			assert(char.isNew === false);
			done();
		});
	});
});