const getDigitFifthPowers = power => {
	let res = 0;
	for (let i = 1; i < 1000000; i++) {
		sumPowers = 0;
		num = i + "";
		const numLength = num.length;
		for (let j = 0; j < numLength; j++) {
			sumPowers += num[j] ** power;
		}
		if (sumPowers === i) {
			res += i;
		}
	}
	return res;
}

console.log(getDigitFifthPowers(5));