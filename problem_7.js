const isPrime = num => {
	for (let i = 3; i ** 2 <= num; i += 2) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}

const checkPrimeByIndex = newIndex => {
	let index = 1;
	let num = 1;
	if (newIndex === 1) {
		return 2;
	}
	while (index < newIndex) {
		num += 2;
		if (isPrime(num)) {
			index++;
		}
	}
	return num;
}

console.log(checkPrimeByIndex(10001));