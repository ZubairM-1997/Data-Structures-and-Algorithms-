
//iterative solution to find the factorial of a number
function factorial(num){
	let total = 1;
	for(let i = num; i > 1; i--){
		total *= i
	}
	return total;
}


//recursive solution to find the factorial of a number
function recursiveFactorial(num){
	if (num === 1) return 1
	return num * recursiveFactorial(num-1)

}


//Write a program to find the greatest common divisor of two positive integers
function euclideanAlgorithm(a, b){
	if (a === 0){
	  return b
	}

	if (b === 0){
	  return a
	}

	var remainder = a % b
	return euclideanAlgorithm(b, remainder)

  }


  //write a program to get the integers in range(x,y)
  //range(2,9) => [3,4,5,6,7,8]

  function range(x,y){

  }
