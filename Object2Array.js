//Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

function toArray(obj) {
	return Object.entries(obj)
}
console.log(toArray({name:'Sakib',age:23}))