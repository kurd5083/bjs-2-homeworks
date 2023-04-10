function getArrayParams(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		}
		if (arr[i] < min) {
			min = arr[i]
		}
		sum = arr.reduce((a, b) => a + b);
	}
	avg = sum / arr.length;
	avg = Number(avg.toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 1) {
		arr = arr[0]
	}
	if (arr.length === 0) {
		return 0;
	}
	let sum = arr.reduce((a, b) => a + b);
	return sum
}

function differenceMaxMinWorker(...arr) {

	if (arr.length === 1) {
		arr = arr[0]
	}

	if (arr.length === 0) {
		return 0;
	}
	arr.sort((a, b) => a - b)
	let min = arr[0];
	let max = arr[arr.length - 1];
	return max - min
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 1) {
		arr = arr[0]
	}
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let countEvenElement = 0;
	let countOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		} else {
			sumOddElement += arr[i];
			countOddElement++;
		}
	}
	let sum = sumEvenElement - sumOddElement;

	return sum
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 1) {
		arr = arr[0]
	}
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let countEvenElement = 0;
	let countOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		} else {
			sumOddElement += arr[i];
			countOddElement++;
		}
	}
	let result = (sumEvenElement / countEvenElement)
	return result
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let newArr = []
	for (let i = 0; i < arrOfArr.length; i++) {
		newArr.push(func(arrOfArr[i]))
	}
	console.log(newArr)
	for (let i = 0; i < arrOfArr[0].length; i++) {
		if (newArr[i] > maxWorkerResult) {
			maxWorkerResult = newArr[i]
		}
	}

	return maxWorkerResult
}