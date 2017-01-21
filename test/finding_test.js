const assert = require('assert');
const MarioChar = require('../model/mariochar.js');

//describe tests
describe('Finding records', function(){

	var char;
	beforeEach(function(done){

		char = new MarioChar({

			name: 'purva'
		}
		);

		char.save().then(function(){
			assert(char.isNew === false);	//fresh and not saved in db
			done();
		});
	});
	//create tests
	it('finds one record from database', function(done){

		MarioChar.findOne({name: 'purva'}).then(function(result){
			assert(result.name === 'purva');
			done();
		})
	});

	it('finds one record by ID from database', function(done){

		MarioChar.findOne({_id: char._id}).then(function(result){
			assert(result._id.toString() === char._id.toString());
			done();
		})

	});

})