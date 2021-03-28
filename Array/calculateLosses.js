//You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

function calculateLosses(obj) {
let a=Object.values(obj)
let b=a.reduce((total,curVal)=> {return total+=curVal},0 )

if(b<0){
  console.log('Lucky You')
}else{
  console.log(`You are robbed about ${b} taka`)
}
return b
}
let para=calculateLosses({
  tv: 30,
  skate: 20,
  stereo: 50,
})
console.log(para)
