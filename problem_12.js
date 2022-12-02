//количество делителей по числу
function countDivisors(num) {
	var s = 0;
	var sqrt = Math.sqrt(num);
	for (var i = 1; i <= sqrt; i++)
		if (num % i == 0)
			s += 2;
		if (num == Math.pow(sqrt, 2)) {
			s--;
		}
	return s;
}

function findNumberByCountOfDivisors(limit){
	var num = 1, sum = 0;
	for (var i = 1; i <= num; i++){
		sum += i;
		if (countDivisors(sum) > limit)
			return sum;
		num++;
	}
}
console.log(findNumberByCountOfDivisors(500));