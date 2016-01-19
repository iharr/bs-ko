var validardorDeRutExternoCopiado = {
  // Valida el rut con su cadena completa "XXXXXXXX-X"
  validaRut: function(rutCompleto) {
    if (!/^[0-9]+-[0-9kK]{1}$/.test(rutCompleto))
      return false;
    var tmp = rutCompleto.split('-');
    var digv = tmp[1];
    var rut = tmp[0];
    if (digv == 'K') digv = 'k';
    return (validardorDeRutExternoCopiado.digitoVerificador(rut) == digv);
  },
  digitoVerificador: function(T) {
    var M = 0,
      S = 1;
    for (; T; T = Math.floor(T / 10))
      S = (S + T % 10 * (9 - M++ % 6)) % 11;
    return S ? S - 1 : 'k';
  }
}

// Uso de la función
// alert( Fn.validaRut('11111111-1') ? 'Valido' : 'inválido');


/**
 * verificar si es un rut vaalido
 *
 * skdfjsdklfjsdklfjsklsjfs
 *
 * @test {ok} cuando es mi rut esta ok
 * @test {} vació / null / 0 / '0'
 * @test {} rut menor a 1millon
 * fase 100000
 * @test {} mayor a 100 millones
 * @test {} con puntos
 * @test {} con guíon
 * @test {} combiaciones punto / guion
 */
exports.esValidoEsteRut = function(rut) {
  // if (rut == '13434745-7' || rut == '16840165-5') {
  //   return true;
  // } else {
  //   return false;
  // }

  return validardorDeRutExternoCopiado.validaRut((rut))
}
