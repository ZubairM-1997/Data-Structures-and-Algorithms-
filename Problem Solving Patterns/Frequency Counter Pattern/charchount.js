
//return an object with keys that are lowercase alphanumeric charachters in the string
function charCount(str){
	//make object to return at the end
	var result = {};

	//loop over the string, for each charachter...
	for (var i=0; i < str.length; i++){
		var char = str[i].toLowerCase()
		// if the char is a number/letter AND a  key in object, add one to count
		if (result[char] > 0){
			result[char]++;

		// if char is  a number/letternot AND not in object, add it and set value to 1
		} else {
			result[char] = 1;
		}

		return result;
	}

		// if charachter is something else (space, period, etc) dont do anything

	// return object at end

}