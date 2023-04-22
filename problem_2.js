const getEvenFibonacci = () => {
	let sum = 0;
	let a = 1, b = 2;
	while (a < 4000000) {
		if (a % 2 === 0) {
			sum += a;
		}
		[a, b] = [b, a + b];
	}
	return sum;
}

console.log(getEvenFibonacci());