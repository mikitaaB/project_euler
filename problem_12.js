const getTriangularNumber = num => num * (num + 1) / 2;

const getCountDivisors = num => {
	let count = 0;
	let sqrt = Math.floor(Math.sqrt(num));
	for (let i = 1; i <= sqrt; i++)
		if (num % i == 0) {
			count += 2;
		}
		if (num === sqrt * sqrt) {
			count--;
		}
	return count;
}

const findNumberByCountOfDivisors = limit => {
	let num = 1;
	let countDivisors = getCountDivisors(num);
	while (countDivisors <= limit) {
		num++;
		countDivisors = getCountDivisors(getTriangularNumber(num));
	}
	return getTriangularNumber(num);
}

console.log(findNumberByCountOfDivisors(500));