var sum1 = 0, sum2 = 0;
for (var i = 1; i <= 100; i++){
	sum1 += i;
	sum2 += Math.pow(i,2);
}
console.log(Math.pow(sum1, 2) - sum2);