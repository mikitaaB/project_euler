const getSmallestMultiple = () => {
	for (let num = 2520; ; num += 2520) {
		for (let i = 11; i <= 20; i++) {
			if (num % i === 0) {
				if (i === 20) {
					return num;
				}
				continue;
			} else {
				break;
			}
		}
	}
}

console.log(getSmallestMultiple());