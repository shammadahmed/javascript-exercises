const sumAll = function(first, last) {
	if (first < 0 || last < 0) return 'ERROR';

	if (typeof first !== 'number' || typeof last !== 'number') return 'ERROR';

	let sum = last;

	while (!(first === last)) {
		sum += first;

		first < last ? first++ : first--;
	}

	return sum;
}

module.exports = sumAll
