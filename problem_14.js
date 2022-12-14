function LongestCollatzSequence (limit) {
	var startNum = 0;
	var maxLen = 0;
	for (var i = 2; i <= limit; i++) {
		var len = 1;
		num = i;
		while (num != 1) {
			if (num % 2 == 0)
				num /= 2;
			else
				num = num * 3 + 1;
			len++;
		}
		if (len > maxLen){
			maxLen = len;
			startNum = i;
		}
	}
	return startNum;
}

console.log(LongestCollatzSequence(1000000));