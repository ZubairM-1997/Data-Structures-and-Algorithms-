//given two strings, write a function to determine if the second string is an anagram of the first.

function anagram(str1, str2){


	// validates if str1 is actually a string
	if (typeof str1 !== "string"){
	  return false
	}

	// validates if str2 is actually a string
	if (typeof str2 !== "string"){
	  return false
	}

	//lowercase both strings
	let str1LowerCase = str1.toLowerCase();
	let str2LowerCase = str2.toLowerCase();

	// create 2 objects to contain each charachter of the string and how many times they appear
	let stringCount1 = {};
	let stringCount2 = {};


	// function ends if str1 length isnt equal to str2 length
	if (str1LowerCase.length !== str2LowerCase.length){
	  return false
	}

	//creates an object stringCount1 which has the number of times a letter appears
	for (let letter of str1LowerCase){
		stringCount1[letter] = (stringCount1[letter] || 0) + 1
	}

	//creates an object stringCount2 which has the number of times a letter appears
	for (let letter of str2LowerCase){
	  stringCount2[letter] = (stringCount2[letter] || 0) + 1
	}

	// if value of stringCount1 isnt equal to value of stringCount2, returns false
	for (let key in stringCount1){
	  if(stringCount1[key] !== stringCount2[key]){
		return false
	  }
	}

	return true

  }

  anagram("Batman", "MANBAT")