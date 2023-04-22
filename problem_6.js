const getSquareOfSum = n => (((1 + n) * n) / 2) ** 2;

const getSumOfSquares = n => {
	if (n === 0) {
		return 0;
	}
	return n ** 2 + getSumOfSquares(n - 1);
}

console.log(getSquareOfSum(100) - getSumOfSquares(100));