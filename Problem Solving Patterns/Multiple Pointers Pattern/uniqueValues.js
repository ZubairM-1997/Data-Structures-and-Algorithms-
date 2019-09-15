//implement a function called countUniqueValues
//this accepts a sorted array and counts the unique values in the array
// can also be negative numberw in the array, but it will always be sorted

function countuniqueValues(sortedArray){
	var i = 0;
	for (var j = 1; j < sortedArray.length; j++){
		if(arr[i] !== arr[j]){
			i++;
			arr[i] = arr[j]
		}
		return i + 1;
	}

}