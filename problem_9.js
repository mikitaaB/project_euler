var notFound = true;
while(notFound == true){
	for (var n = 1; n < 1000; n++){
		for (var m = 2; m < 1000; m++){
		var a = Math.pow(m, 2) - Math.pow(n, 2);
		var b = 2 * m * n;
		var c = Math.pow(m, 2) + Math.pow(n, 2);
		if (a+b+c == 1000){
			console.log(a*b*c);
			notFound = false;
			break;
		}
		}
		if (!notFound)
		break;
	}
}