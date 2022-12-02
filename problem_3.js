var div = 2;
var num = 600851475143;
while(num > 1){
	if(num % div === 0) {
		num /= div;
	} else {
		div++;
	}
}
console.log(div);