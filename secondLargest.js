//Create a function that takes an array of numbers and returns the second largest number.

function secondLargest(arr) {
arr.sort((a,b)=> {return b-a})
console.log(arr)
return `Second largest number in the array is ${arr[1]}`

}
let arr=secondLargest([10,4,87,687,87,45,44])
console.log(arr)