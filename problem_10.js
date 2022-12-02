function isPrime(num) {
	let sqrt = Math.sqrt(num);
	for (let i = 3; i <= sqrt; i += 2)
		if (num % i == 0)
			return false;
	return true;
}

function sumPrimesBeforeNumber(limit){
	let number = 3;
	let sum = 0;
	if (limit < number)
		return 2;
	while (number < limit) {
		if (isPrime(number))
			sum += number;
		number += 2;
	}
	sum += 2;
	return sum;
}
console.log(sumPrimesBeforeNumber(2000000));