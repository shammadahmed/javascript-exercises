const snakeCase = function(str) {

	str = str.charAt(0).toLowerCase() + str.slice(1);

	str = str.replace(/(\.+$)|(^\.+)/, '');

	if(str.search(/\.\./) !== -1) {
		return str.replace(/\.\./g, '_').toLowerCase();
	}

	str = str.replace(/\s?([A-Z])/g, (match, $1) => `_${$1.toLowerCase()}`);

	str = str.replace(/\s|-/g, '_');

	return str.replace(/\W/g, '').toLowerCase();
}

module.exports = snakeCase