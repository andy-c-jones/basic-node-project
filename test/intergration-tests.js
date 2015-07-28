var expect = require('chai').expect;
var request = require('supertest');
var app = require('../app/app');


suite('Intergration Tests', function() {
  it('should return the hello world page', function() {
    var response = request(app).get('/');
      response.expect('Content-Type', "text/html; charset=utf-8");
      response.expect(200);
  })});
