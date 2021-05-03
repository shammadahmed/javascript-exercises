const ftoc = function(temperature) {
	return Math.round((5 / 9) * (temperature - 32) * 10) / 10;
}

const ctof = function(temperature) {
	return Math.round(((9 / 5 * temperature) + 32) * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
