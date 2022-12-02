var num;
var palindrome = [];

for (var i = 100; i <= 999; i++){
	for (var j = 100; j <= 999; j++){
	num = i * j;
	if (String(num).split('').reverse().join('') == num){
		palindrome.push(num);
	}
	}
}

var max = palindrome[0];
for (i = 0; i < palindrome.length; i++){
	if (palindrome[i] > max)
	max = palindrome[i];
}

console.log(max)