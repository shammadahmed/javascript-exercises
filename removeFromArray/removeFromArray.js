const removeFromArray = function(array, ...elements) {
	for (let i = 0; i < elements.length; i++) {
		positionOfElement = array.indexOf(elements[i]);

		if (positionOfElement >= 0) {
			array.splice(positionOfElement, 1);
		}
	}

	return array;
}

module.exports = removeFromArray