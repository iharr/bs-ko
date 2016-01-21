
exports.klunker = function(string) {
  
	var klunk = string;

	var dispensableKlunk = klunk;

	var chars = dispensableKlunk.split("");

	var amount = 0;

	var arrayLength = chars.length;
	for (var i = 0; i < arrayLength; i++){
	    currentChar = chars[i];
	    var count = (klunk.match(/currentChar/g) || []).length;
	    if (count > 1){
	    	amount++;
	    }
	}

	return amount;

}
