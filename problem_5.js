const checkIsAllDivided = num => {
	for (let i = 11; i <= 20; i++) {
		if (num % i !== 0) {
			return false;
		}
	}
	return true;
}

const getSmallestMultiple = () => {
	for (let num = 2520; ; num += 2520) {
		if (checkIsAllDivided(num)) {
			return num;
		}
	}
}

console.log(getSmallestMultiple());