console.time('FirstWay');

const getLongestCollatzSequence = limit => {
	let longestSequence = 0;
	const lowestLimit = limit/2;
	let maxLen = 0;
	const cache = {};
	for (let i = lowestLimit; i < limit; i++) {
		let len = 1;
		num = i;
		while (num != 1) {
			if (cache[num]) {
				len += cache[num] - 1;
				break;
			}
			if (num % 2 === 0) {
				num /= 2;
			} else {
				num = num * 3 + 1;
			}
			len++;
		}
		cache[i] = len;

		if (len > maxLen){
			maxLen = len;
			longestSequence = i;
		}
	}
	return longestSequence;
}

console.log(getLongestCollatzSequence(1000000));


console.timeEnd('FirstWay');