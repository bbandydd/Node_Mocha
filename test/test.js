var assert = require("assert"),
	request = require('supertest'),
	app = require('../server').app

var server = request.agent('http://localhost:8888')

describe ('role 1 unit test', function(){

	before(function(done) {
		server
		.post('/setRole')
		.send({role: 1})
		.expect("Content-type", /json/)
		.expect(200)
		.end(function(err, res) {
			done()
		})
	})

	describe('start role 1 api test', function(){

		it ('should return home page', function(done){

			server
			.get('/')
			.expect("Content-type", /json/)
			.expect(200)
			.end(function(err, res) {
				assert.equal(200, res.status)
				assert.equal(false, res.body.error)
				done()
			})
		})

		it ('should add two numbers', function(done){

			server
			.post('/add')
			.send({num1: 10, num2: 20})
			.expect("Contenr-type", /json/)
			.expect(200)
			.end(function(err, res) {

				assert(200, res.status)
				assert('false', res.body.error)
				assert.equal(30, res.body.data)
				done()
			})
		})
	})
})

describe ('role 99 unit test', function(){

	before(function(done) {
		server
		.post('/setRole')
		.send({role: 99})
		.expect("Content-type", /json/)
		.expect(200)
		.end(function(err, res) {
			done()
		})
	})

	describe('start role 99 api test', function(){

		it ('should return home page', function(done){

			server
			.get('/')
			.expect("Content-type", /json/)
			.expect(200)
			.end(function(err, res) {
				assert.equal(200, res.status)
				assert.equal(false, res.body.error)
				done()
			})
		})

		it ('should add two numbers', function(done){

			server
			.post('/add')
			.send({num1: 50, num2: 40})
			.expect("Contenr-type", /json/)
			.expect(200)
			.end(function(err, res) {

				assert(200, res.status)
				assert('false', res.body.error)
				assert.equal(90, res.body.data)
				done()
			})
		})
	})
})