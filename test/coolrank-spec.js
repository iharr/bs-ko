var should = require('should');

//include file to be tested
var coolrank = require(__dirname + '/../coolrank.js');
var caracatus_potts = require(__dirname + '/../caracatus_potts');

describe('#methodName(param)', function() {
  it('prueba1', function(){
  	// if string is longer than 10, flip it and capitalize it
    coolrank.calc("billy ").should.equal("billy ");
    coolrank.calc("billy! Bob@ ").should.equal(" @BOB !YLLIB");
    // if there are two or more occurences of a letter, return that letter's numerical value
    // just get it to recognize the pair
    caracatus_potts.klunker("arrgh").should.equal(1);
    // basic example
    // caracatus_potts.klunker("arrgh").should.equal(18);
    // if there are none
    // caracatus_potts.klunker("whiny").should.equal(false);
    // if string is empty
    // caracatus_potts.klunker("").should.equal(false);
    // if one is caps
    // caracatus_potts.klunker("Rare").should.equal(18);
    // if there are more than two
    // caracatus_potts.klunker("abacaba").should.equal(1);
    // if there are multiple pairs
    // caracatus_potts.klunker("aardvark").should.equal(1+" and "+18);
    // if special characters are in the string
    // caracatus_potts.klunker("blabbe&$r").should.equal(2);
    // if there's a pair of special characters
    // caracatus_potts.klunker("blab$be$r").should.equal(false);
  });
})
