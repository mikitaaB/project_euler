function sumDivisors(num) {
	var sum = 0;
	for (var i = 0; i < num; i++)
		if (num % i == 0)
			sum += i;
	return sum;
}

function amicableNumbers(limit){
	var number = 1, sumAmicableNum = 0;
	var oAmicableNum = {};
	while (number < limit) {
		var sumDiv = sumDivisors(number);
		if (sumDivisors(sumDiv) == number && number !== sumDiv) {
			oAmicableNum[number] = "";
			oAmicableNum[sumDiv] = "";
		}
		number++;
	}
	var arr = Object.keys(oAmicableNum);
	for (var i = 0; i < arr.length; i++)
		sumAmicableNum += parseInt(arr[i]);
	return sumAmicableNum;
}

console.log(amicableNumbers(10000));