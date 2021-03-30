//Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

function totalVolume(...boxes) {
return boxes.reduce((total,curVal)=> total+(curVal.reduce((total,curVal)=> total*curVal )) ,0)}

let para=totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1])
console.log(para)