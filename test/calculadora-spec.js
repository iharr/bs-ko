var should = require('should');

// incluir lo que quiero testear
var calculadora = require(__dirname + '/../calculadora.js');

describe('#methodName(param1, param2)', function() {
  it('prueba1', function() {
    calculadora.sumar(1, 1).should.equal(2);
    calculadora.sumar(2, 2).should.equal(4);
    calculadora.sumar('2', '2').should.equal(4);
    calculadora.sumar('2', 2).should.equal(4);
    calculadora.sumar(2.0, '2').should.equal(4);
    calculadora.sumar('one', 'one').should.equal(2);
    calculadora.sumar('five', 'ten').should.equal(15);
    // calculadora.sumar('five', 'ten').should.equal(15);
    // Math.ceil(0.6).should.equal(1);

  });

})
