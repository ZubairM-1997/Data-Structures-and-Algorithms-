
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
	return num * factorial(num-1)

}
