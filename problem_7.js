const isPrime = num => {
	for (let i = 3; i ** 2 <= num; i += 2) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}

const checkPrimeByIndex = newIndex => {
	if (newIndex === 1) {
		return 2;
	}
	let index = 2;
	let num = 3;
	while (index <= newIndex) {
		if (isPrime(num)) {
			index++;
		}
		if (index <= newIndex) {
			num += 2;
		}
	}
	return num;
}

console.log(checkPrimeByIndex(10001));