//Create a function that takes an array of integers and returns the sum of all the integers that have an even index, multiplied by the integer at the last index

function evenLast(arr) {
    
return arr.reduce((total,curVal,i) => i%2===0 ? total+ (curVal * arr[arr.length-1]): total +0  ,0);
   
}
let para=evenLast([1, 3, 3, 1, 10])
console.log(para)