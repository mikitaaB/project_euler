const isPrime = num => {
	for (let i = 3; i ** 2 <= num; i += 2) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}

const sumPrimesBeforeNumber = limit => {
	let number = 3;
	if (limit < number) {
		return 0;
	}
	let sum = 2;
	while (number < limit) {
		if (isPrime(number)) {
			sum += number;
		}
		number += 2;
	}
	return sum;
}

console.log(sumPrimesBeforeNumber(2000000));