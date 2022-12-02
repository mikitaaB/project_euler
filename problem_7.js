function isPrime(num) {
	for (var i = 3; Math.pow(i, 2) <= num; i += 2)
		if (num % i == 0)
			return false;
	return true;
}

function checkPrimeByIndex(newIndex){
	var index = 1;
	var num = 1;
	if (newIndex == 1)
		return 2;
	while (index < newIndex) {
		num += 2;
		if (isPrime(num))
			index++;
	}
	return num;
}

console.log(checkPrimeByIndex(10001));