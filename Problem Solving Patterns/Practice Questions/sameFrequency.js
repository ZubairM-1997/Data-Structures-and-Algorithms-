//Write a function called sameFrequency
//Given two positive integers, find out if the two numbers have the same frequency of digits

// sameFrequency(182, 281) => true
// sameFrequency(34, 14) => false
// sameFrequency(22, 222) => false

function sameFrequency(num1, num2){

	if (typeof num1 !== "number"){
	  return undefined;
	}

	if (typeof num2 !== "number"){
	  return undefined;
	}

	  if (num1 < 0){
		  return null;
	  }

	  if (num2 < 0){
		  return null;
	  }

	let num1Str = num1.toString();
	let num2Str = num2.toString();

	let numCount1 = {};
	let numCount2 = {};

	if (num1Str.length !== num2Str.length){
	  return false;
	}

	for (let number of num1Str){
		  numCount1[number] = (numCount1[number] || 0) + 1
	  }

	for (let number of num2Str){
		  numCount2[number] = (numCount2[number] || 0) + 1
	  }

	for (let key in numCount1){
		if(numCount1[key] !== numCount2[key]){
		  return false
		}
	  }

	  return true
  }
