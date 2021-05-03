const repeatString = function(string, times) {
	if (times < 0) return 'ERROR';

	repeatedString = ''

	for (let i = 1; i <= times; i++) {
		repeatedString += string;
	}

	return repeatedString;
}

module.exports = repeatString
