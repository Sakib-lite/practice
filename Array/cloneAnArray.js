function clone(arr) {
	let cloneArr=[...arr,arr]
	return cloneArr
}
let para=clone([1, 1])
console.log(para)``