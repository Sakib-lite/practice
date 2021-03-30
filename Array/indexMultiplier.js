//Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.


function indexMultiplier(arr) {
return arr.reduce((total,curVal,index)=> total + (curVal*index),0)
     
}

let para=indexMultiplier([1, 2, 3, 4, 5])
console.log(para)