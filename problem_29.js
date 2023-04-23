function distinctPowers(limit) {
	const numPow = new Set();
	for (let i = 2; i <= limit; i++) {
		for (let j = 2; j <= limit; j++) {
			numPow.add(i ** j);
		}
	}
	return numPow.size;
}
console.log(distinctPowers(100));