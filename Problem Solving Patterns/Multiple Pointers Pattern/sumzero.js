//Write a function called sumZero which accepts a sorted array of integers.
//The function should find the first pair where the sum is zero
//Return an array that includes both values that sum to zero or undefined if it doesnt exist


// naive solution
// O(N^2) Should definitely avoid
// Space compexity of O(N)

function sumZero (arr){
	for (let i =0; i < arr.length; i++){
		for (let j = i+1; j < arr.length; j++){
			if (arr[i] + arr[j] === 0){
				return [arr[i], arr[j]]
			}
		}
	}
}

//Time Complexity O(N)
//Space Complexity O(1)

function sumZero2(arr){
	let left = 0;
	let right = arr.length - 1;
	while (left < right){
		let sum = arr[left] + arr[right];
		if(sum === 0){
			return [arr[left] + arr[right]];
		} else if(sum > 0){
			right--;
		} else {
			left++;
		}
	}

}