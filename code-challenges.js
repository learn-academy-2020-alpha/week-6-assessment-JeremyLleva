// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [{name: "ford prefect", occupation: "hitchhiker"}, {name: "zaphod beeblebrox", occupation: "president of the galaxy,"}, {name: "arthur dent", occupation: "radio employee"}]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is the president of the galaxy." "Arthus Dent is a radio employee."

const sentence = (people) => {
	people.forEach(person => {
		let newName = person.name.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
		let newOccupation = person.occupation.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
		console.log(newName + " is a " + newOccupation )
		}	
	)
}

sentence(people);


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


const divisibleByThree = (array) => {
	let numsArray = array.filter((value) => typeof value == "number")
	let dividedArray = numsArray.map((value) => value % 3)
	return dividedArray
}

console.log(divisibleByThree(testingArray1))
console.log(divisibleByThree(testingArray2))

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

const noDupes = (arr1, arr2) => {
	let mySet = new Set()
	arr1.forEach(value => { 
		mySet.add(value)
	})
	arr2.forEach(value => {
		mySet.add(value)
	})
	return Array.from(mySet)
}

console.log(noDupes(testingArray3, testingArray4))