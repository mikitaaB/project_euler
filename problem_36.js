function isPalindrome(num, base){
	num = num.toString(base);
	if (String(num).split('').reverse().join('') == num)
		return true;
}
var num = 1, sum = 0;
while (num < 1000000) {
	if (isPalindrome(num, 10) && isPalindrome(num, 2))
		sum += num;
	num++;
}
console.log(sum);