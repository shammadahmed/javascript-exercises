function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (numbers) {
	return numbers.reduce((sum, number) => sum + number, 0);
}

function multiply (numbers) {
	return numbers.reduce((sum, number) => sum * number, 1);
}

function power(number, power) {
	return number**power;
}

function factorial(number) {
	if (number === 0) return 1;
	range = [...Array(number + 1).keys()]
	range.splice(0, 1);
	return multiply(range);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}