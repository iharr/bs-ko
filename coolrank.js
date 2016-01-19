
exports.calc = function(name) {
  //var character = name.charAt(0);
  if(name.length > 10){
  	name = name.split('').reverse().join('');
  	name = name.toUpperCase();
  }
  name.toString();
  return name;
}
