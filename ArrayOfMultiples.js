function arrayOfMultiples (n,l) {

     return Array.from({length:l},(_,i)=> {return (i+1)*n})
}
let arr=arrayOfMultiples(5,3)
console.log(arr)
 

//Alternative Solution
function arrayOfMultiples2 (n,l) {
let arr2=[]
for (let i=1;i<=l;i++)
{
     arr2.push(i*n)
}
return arr2
}
var arr2=arrayOfMultiples2(5,5)
console.log(arr2)
