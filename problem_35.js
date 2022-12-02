function isPrime(num) {
	var sqrt = Math.sqrt(num);
	if (num % 2 == 0)
		return false;
	for (var i = 3; i <= sqrt; i+=2)
		if (num % i == 0)
			return false;
	return true;
}

function checkRotation(num){
	var numStr = String(num);
	for (var i = 0; i < numStr.length; i++) {
		numStr = numStr.slice(1, numStr.length) + numStr.charAt(0);
		if (!isPrime(Number(numStr)))
			return false;
	}
	return true;
}

var num = 3, count = 0;
while (num < 1000000) {
	if (checkRotation(num) && isPrime(num))
		count++;
	num += 2;
}
console.log(count+1);