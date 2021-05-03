const palindromes = function(string) {
	unpunctuationStr = string.toLowerCase().replace(/\W/g, '');

	return unpunctuationStr === unpunctuationStr.split('').reverse().join('');
}

module.exports = palindromes
