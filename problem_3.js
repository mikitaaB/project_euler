const largestPrimeFactor = () => {
	let div = 2;
	let num = 600851475143;
	while (num > 1) {
		if (num % div === 0) {
			num /= div;
		} else {
			div++;
		}
	}
	return div;
}
console.log(largestPrimeFactor());