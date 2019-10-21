// this function accepts an array a value
// loop through the array and check if the current array element is equal to the value
//	if it is, return the index of which the element is found
// if the value isn't found, return -1

function linearSearch(n, array){

	for(let i = 0; i < array.length; i++){
		if (array[i] === n){
			return i
		} else {
			return -1
		}
	}
}


// Binary Search Algorithms
// Much faster form of search
// only works on sorted arrays

// this function accepts a sorted array and a value
// create a left pointer at the start of the array
// create a pointer at the end of the array
// while the left pointer comes before the right pointer
	// create the pointer in the middle
	// if you find the value you want, return the index
	// if the value is too small, move the left pointer up
	// if the value is too large, move the right pointer down

// if you never find the value, return -1

function binarySearch(n, array){
	let left = 0
	let right = array.length - 1

	while (array[left] < array[right]){
		let middle = Math.floor((left + right) / 2)
		if (array[middle] === n){
			return middle
		} else if (array[middle] < n){
			left = middle + 1
		} else if (array[middle] > n){
			right = middle - 1
		} else {
			return -1
		}

		middle = Math.floor((left + right) / 2)
	}
}
