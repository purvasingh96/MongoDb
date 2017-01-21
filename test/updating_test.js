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
	it('updates one record from database', function(done){

		MarioChar.findOneAndUpdate({name: 'purva'}, {name: 'silvia'}).then(function()
			{
				MarioChar.findOne({_id: char._id}).then(function(result){
					assert(result.name === 'silvia');
					done();
				});
			
			
		});
	});

});