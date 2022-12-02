function distinctPowers(limit) {
	var numPow = {};
	for (var i = 2; i <= limit; i++)
		for (var j = 2; j <= limit; j++)
			numPow[Math.pow(i,j).toExponential(12)] = "";
	return Object.keys(numPow).length;
}
console.log(distinctPowers(100));