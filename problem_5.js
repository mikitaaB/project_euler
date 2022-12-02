var divided = false;
var k = 0;
while (!divided){
	for (var num = 2520; ; num += 2520){
		for (var i = 11; i <= 20; i++){
			if (num % i == 0)
				k++;
		}
		if (k == 10) {
			console.log(num);
			divided = true;
			break;
		}
		else
			k = 0;
		if (divided == true)
			break;
	}
}