const isPalindrome = mul => {
	let revertMul = 0;
	let copyMul = mul;
	while (copyMul) {
		revertMul = (copyMul % 10) + (revertMul * 10);
		copyMul = (copyMul / 10) | 0;
	}
	return mul === revertMul;
}

const getMaxElOfArray = (arr) => {
	let max = arr[0];
	const arrLength = arr.length;
	for (let i = 0; i < arrLength; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

const getLargestPalindromeProduct = () => {
	let mul = 0;
	const palindromes = [];

	for (let i = 999; i >= 100; i--) {
		for (let j = 999; j >= 100; j--) {
			mul = i * j;
			if (isPalindrome(mul)) {
				palindromes.push(mul);
			}
		}
	}

	return getMaxElOfArray(palindromes);
}

console.log(getLargestPalindromeProduct());