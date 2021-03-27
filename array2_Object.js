//Write a function that converts an object into an array of keys and values

function objectToArray(obj) {
	return Object.fromEntries(obj)
}
let func = objectToArray([['a',2],['b',5],['c',10]])
console.log(func)