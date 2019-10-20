// John works at a clothing store.
// He has a large pile of socks that he must pair by color for sale.
// Given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are.


//For example, there are n=7 socks with colors ar = [1,2,1,2,1,3,2]
// There is one pair of color 1 and of color 2
// There are three odd socks left, one of each color. The number of pair is 2


let array = [1,2,1,2,1,3,2]


// n = number of socks in the pile
// ar = the colors of each sock

function sockMerchant(n, ar) {
	// create an object to hold counts of sock colors
	let sock_colours = {}
		//iterate over array
		ar.forEach((item) => {
			if(!sock_colours[item]) {
				sock_colours[item] = 0;
			}

			// if sock color already in object, increase count
			sock_colours[item] = sock_colours[item] + 1;
		})

		console.log(sock_colours)


	// sum results of division
	let total = 0
	for (var key in sock_colours){
		total += parseInt(sock_colours[key]/ 2)
	}

	return total


}