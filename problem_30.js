const getMaxLimit = power => power * 9 ** power;

const getDigitPowers = power => {
	let res = 0;
	if (!power) {
		return res;
	}
	const maxLimit = getMaxLimit(power);
	for (let i = 2; i < maxLimit; i++) {
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

console.log(getDigitPowers(5));