let Mark= {
fullName: 'Mark Don',
mass: 69,
height: 1.4,
func : function() {
return this.BMI =this.mass / (this.height * this.height)
}
}
let John= {
     fullName: 'John Cena',
     mass: 90,
     height: 1.6,
     func : function() {
     return this.BMI =this.mass / (this.height * this.height)
     }
     }


Mark.func()
John.func()

if(Mark.BMI>John.BMI){
     console.log(Mark.fullName+ ' has higher BMI')
}
else {
     console.log(John.fullName+ ' has higher BMI')
}
console.log(Mark)
console.log(John)