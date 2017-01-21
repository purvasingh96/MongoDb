const assert = require('assert');
const Author = require('../model/authors.js');
const mongoose = require('mongoose')

//describe tests
describe('nesting records', function(){

	beforeEach(function(done){

	//drop the collection
	mongoose.connection.collections.authors.drop(function(){
		done();
	});
});

	//create tests
	/*it('creates an author with sub documents', function(done){

		var pat = new Author({
			name: 'Nicholas Sparks',
			books: [{title: 'The Notebook', pages: 200}]
		});

		pat.save().then(function(){
			Author.findOne({name: 'Nicholas Sparks'}).then(function(record){
				assert(record.books.length === 1);
				done();
			});

		});
	});
	*/

	it('Adds a books to author', function(done){

		var pat = new Author({
			name: 'Nicholas Sparks',
			books: [{title: 'The Notebook', pages: 400}]
		});

		pat.save().then(function(){
			Author.findOne({name: 'Nicholas Sparks'}).then(function(record){

				record.books.push({title: 'ps: I love you', pages: 400});
				record.save().then(function(){
					Author.findOne({name: 'Nicholas Sparks'}).then(function(record){
						assert(record.books.length === 2);
						done();
					});
				});
			});
		});
});
});
	
