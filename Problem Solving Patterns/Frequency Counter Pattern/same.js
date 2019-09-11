// write a function called Same, which accepts two arrays,
// The function should return true if every value in the array has its corresponding value
// squared in the second array
// the frequency of the values must be the same

// same([1, 2, 3], [4,1,9]) => true
// same([1,2,3], [1,9]) => false
// same([1,2,1], [4,4,1]) => false (must be same frequency)


// naive solution
// this function is O(N^2), we want to avoid that, quadratic relationship
function same(arr1, arr2){
	if(arr1.length !== arr2.length){
		//returns false when the two arrays are of different length
		return false
	}
	for(let i=0; i < arr1.length; i++){

		//finds the indexes of the array 2, where we pass in the square of each index of array 1
		// "what is the index of 1 squared in array 2?"
		let correctIndex = arr2.indexOf(arr1[i] ** 2)
		if(correctIndex === -1) {
			// if index does not exist, then it returns false
			return false
		}
		arr2.splice(correctIndex, 1)
	}

	return true
}

// Frequency counter pattern
// usually construct an object to break down the contents of an array/string
// compare those objects

// O(n) notation, most efficient
function same(arr1, arr2){
	if(arr1.length !== arr2.length){
		return false
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};


	// creates 2 objects which contains a key value pair of the integer and how many times that integer appears in that array
	for (let val of arr1){
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
	}

	for (let val of arr2){
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
	}

	for (let key in frequencyCounter1){
		// if the key in frequencycounter2 is not a square of the key in frequencycounter1
		//return false
		if(!(key ** 2 in frequencyCounter2)){
			return false
		}
		// if the value of frequencycounter2 doesnt equal to the value of frequencycounter1
		if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
			return false
		}
	}

	return true

}