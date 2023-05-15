const getSumDivisors = num => {
	if (num === 1) {
		return num;
	}
	const root = Math.sqrt(num);
	let sum = Number.isInteger(root) ? root : 1;
	for (let i = 2; i < root; i++) {
		if (num % i === 0) {
			sum += num / i + i;
		}
	}
	return sum;
}

const amicableNumbers = limit => {
	let number = 1;
	let sumAmicableNum = 0;
	let amicableNums = new Set([]);
	while (number < limit) {
		let sumDiv = getSumDivisors(number);
		if (getSumDivisors(sumDiv) === number && number !== sumDiv) {
			amicableNums.add(number);
			amicableNums.add(sumDiv);
		}
		number++;
	}

	for (let num of amicableNums) {
		sumAmicableNum += num;
	}
	return sumAmicableNum;
}

console.log(amicableNumbers(10000));