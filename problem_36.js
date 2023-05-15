const isPalindrome = (num) => {
	let revertNum = "";
	const numLength = num.length;
	for (let i = numLength - 1; i >= 0; i--) {
		revertNum += num[i];
	}
	return num === revertNum;
};

const getDoubleBasePalindromes = (limit) => {
	let num = 1;
	let sum = 0;
	while (num < limit) {
		if (isPalindrome(num + "") && isPalindrome(num.toString(2))) {
			sum += num;
		}
		num++;
	}
	return sum;
};

console.log(getDoubleBasePalindromes(1000000));
