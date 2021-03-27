//I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

function flatten(arr) {
 let arr2 = [];
    
     for (let i = 0; i < arr.length; i++) {
      return arr2=(arr[i].concat(arr[i+1].concat(arr[i+2])))
      
     }
     return arr2; 
     

   }
   console.log(flatten([[1, 2], [3, 4],[5,6]]))

   
   //Better Solution
   function flatten2(para) {
   return  Array.prototype.concat.apply([], para)


   }
   console.log(flatten2([[1, 2], [3, 4],[5,6]]))