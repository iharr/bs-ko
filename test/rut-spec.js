var should = require('should');

// incluir lo que quiero testear
var rut = require(__dirname + '/../rut.js');

describe('#rut(param1, param2)', function() {
  it('cuando es mi rut esta ok', function() {
    rut.esValidoEsteRut('13434745-7').should.equal(true);
    rut.esValidoEsteRut('16840165-5').should.equal(true);
  });

  it('vacio / nulll / 0 / 0', function() {
    rut.esValidoEsteRut('').should.equal(false);
    rut.esValidoEsteRut().should.equal(false);
    rut.esValidoEsteRut(null).should.equal(false);
    rut.esValidoEsteRut(undefined).should.equal(false);
    rut.esValidoEsteRut('undefined').should.equal(false);
    rut.esValidoEsteRut(' ').should.equal(false);
    rut.esValidoEsteRut('.').should.equal(false);
    rut.esValidoEsteRut(0).should.equal(false);
    rut.esValidoEsteRut('0').should.equal(false);
  });

})
