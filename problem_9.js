const getSpecialPythagoreantriplet = (desireSum) => {
	const limit = Math.floor(Math.sqrt(desireSum / 2));
	for (let m = 1; m < limit; m++) {
		for (let n = 1; n < limit; n++) {
			const a = m * m - n * n;
			const b = 2 * m * n;
			const c = m * m + n * n;
			if (a + b + c === desireSum) {
				return a * b * c;
			}
		}
	}
	return 0;
};

console.log(getSpecialPythagoreantriplet(1000));
