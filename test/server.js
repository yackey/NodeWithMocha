
var expect  = require("chai").expect;
var request = require("request");
require("../app/main");

describe("Hello World API", function() {
  describe("Emits Hello World", function() {
    var url = "http://localhost:8091";

    it("returns Hello World", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(response.read) == "Hello World";
        done();
      });
    });


  });
});

