var should = require('should');

//include file to be tested
var coolrank = require(__dirname + '/../coolrank.js');

describe('#methodName(param)', function() {
  it('prueba1', function(){
    coolrank.calc("billy ").should.equal("billy ");
    coolrank.calc("billy! Bob@ ").should.equal(" @BOB !YLLIB");
    coolrank.calc(7).should.equal("7");
  });
})
