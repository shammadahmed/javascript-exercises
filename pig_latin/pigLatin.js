function translate(str) {

	return str.replace(/\w+/g, match => {
		if (match.search(/\b[aeiou]/) > -1) {
			return match + 'ay';
		} else if (match.search(/\b(sch])/) > -1) {
			return match.slice(3) + match.slice(0, 3) + 'ay';
		} else if (match.search(/\b[^aeiou]qu/) > -1) {
			return match.slice(3) + match.slice(0, 3) + 'ay';
		} else if (match.search(/\bqu/) > -1) {
			return match.slice(2) + match.slice(0, 2) + 'ay';
		} else if (match.search(/\b([^aeiou]){3}/) > -1) {
			return match.slice(3) + match.slice(0, 3) + 'ay';
		} else if (match.search(/\b([^aeiou]){2}/) > -1) {
			return match.slice(2) + match.slice(0, 2) + 'ay';
		} else {
			return match.slice(1) + match.charAt(0) + 'ay';
		}
	});
}


module.exports = {
	translate
}