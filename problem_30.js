var res = 0;
for (var i = 2; i < 1000000; i++) {
	sumPowers = 0;
	num = i.toString();
	for (var j = 0; j < num.length; j++)
		sumPowers += Math.pow(num[j], 5);
	if (sumPowers == i) {
		res += i;
	}
}
console.log(res);