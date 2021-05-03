const fibonacci = function(termNumber) {
	if (Math.sign(termNumber) === -1) return 'OOPS';

	let terms = [1, 1];

	for (let i = 3; i <= termNumber; i++) {

		terms.push(terms[terms.length - 1] + terms[terms.length - 2]);
		
	}

	return terms[termNumber - 1];
}

module.exports = fibonacci