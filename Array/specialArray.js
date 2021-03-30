//An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise

function isSpecialArray(arr) {
     return arr.every((el, index) => el % 2 === index % 2)

}

let para=isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])
console.log(para)