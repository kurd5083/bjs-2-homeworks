"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let D = 0;
  let x1 = 0;
  let x2 = 0;
  let x = 0;
  D = Math.pow(b, 2) - 4 * a * c;
  if (D < 0) {
  	return arr;
  } else if (D == 0) {
  	x = -b / (2 * a);
  	arr.push(x)
  	console.log(arr)
  	return arr;
  } else if (D > 0) {
  	x1 = (-b + Math.sqrt(D)) / (2 * a);
  	x2 = (-b - Math.sqrt(D)) / (2 * a);
  	arr.push(x1, x2)
  	console.log(arr)
  	return arr;
  }
}
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 12 / 100;
  amount = amount - contribution;
  let x = amount * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  x = x * countMonths;
  x = ((Math.round(x * 100) / 100));
  return x;
}