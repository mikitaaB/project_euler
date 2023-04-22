console.time('FirstWay');

const isPrime = num => {
	if (num % 2 == 0) {
		return false;
	}
	for (let i = 3; i ** 2 <= num; i += 2) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}

const checkRotation = num => {
	let numStr = num + "";
	const numStrLength = numStr.length;
	for (let i = 0; i < numStrLength; i++) {
		numStr = numStr.slice(1, numStrLength) + numStr[0];
		if (!isPrime(+numStr)) {
			return false;
		}
	}
	return true;
}

const getCircularPrimesCount = limit => {
	if (limit < 0) {
		return 0;
	}
	let num = 3, count = 1;
	while (num < limit) {
		if (isPrime(num) && checkRotation(num)) {
			count++;
		}
		num += 2;
	}
	return count;
}

console.log(getCircularPrimesCount(1000000));



console.timeEnd('FirstWay');