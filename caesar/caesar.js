const caesar = function(str, shift) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let letter;

	return str.split('').map(char => {

		if (char.search(/[a-z]/i) === 0) {

			if (Math.sign(shift) === -1) shift = alphabet.length + shift;

			letterKey = alphabet.indexOf(char.toLowerCase()) + shift;

			if (letterKey >= 25) {
				letterKey = letterKey % alphabet.length;
			}

			if (char.toUpperCase() === char) {
				return alphabet[letterKey].toUpperCase();
			} else {
				return alphabet[letterKey];
			}

		}
		
		return char;

	}).join('');
}

module.exports = caesar