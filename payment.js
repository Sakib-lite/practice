
function tipFunc(res,bill) {
      if (bill<50){
          console.log(`In ${res} restaurent total  payment is ${(bill)+(bill)*(20/100)} and tip for the waiter is ${(bill)*(20/100)}`)
     }
     else if (bill>=50 || bill>200) {

          console.log(`In ${res} restaurent total payment is ${(bill)+(bill)*(20/100)} and tip for the waiter is ${(bill)*(15/100)}`)

     }

     else if (bill>=200) {

          console.log(`In ${res} restaurent total payment is ${(bill)+(bill)*(20/100)} and tip for the waiter is ${(bill)*(10/100)}`)

     }
     return bill
}
var res1=tipFunc('first',124)
var res2=tipFunc('second',48)
var res3=tipFunc('third',268)




