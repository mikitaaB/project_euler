const getLastDivider = divider => {
	const max = 1000;
	for (let i = max - 1; i > 0; i--) {
		if (i % divider === 0) {
			return i;
		}
	}
	return 0;
}

const getCountOfNum = (lastDiv, div) => Math.floor((lastDiv - div) / div + 1);

const getSumByDiv = (div, lastDiv, count) => ((div + lastDiv) / 2) * count;

const getSumOfMul = () => {
	const lastDivThree = getLastDivider(3);
	const lastDivFive = getLastDivider(5);
	const lastDivFifteen = getLastDivider(15);
	return getSumByDiv(3, lastDivThree, getCountOfNum(lastDivThree, 3)) +
		getSumByDiv(5, lastDivFive, getCountOfNum(lastDivThree, 5)) -
		getSumByDiv(15, lastDivFifteen, getCountOfNum(lastDivFifteen, 15));
}

console.log(getSumOfMul());