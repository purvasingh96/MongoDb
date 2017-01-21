const assert = require('assert');
const MarioChar = require('../model/mariochar.js');

//describe tests
describe('Finding records', function(){

	var char;
	//runs before each test in this block
	beforeEach(function(done){

		char = new MarioChar({

			name: 'purva'
		});

		char.save().then(function(){
			done();
		});
	});
	//create tests
	it('deletes one record from database', function(done){

		MarioChar.findOneAndRemove({name: 'purva'}).then(function()
			{
				MarioChar.findOne({name: 'purva'}).then(function(result){
					assert(result === null);
					done();
				});
			
			
		});
	});

});