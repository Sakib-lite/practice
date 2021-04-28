`use strict`
let question1 =new Map([['question', 'Which is the best programming language'],
[1,'Javascript'],
[2,'Java'],
[3,'C Language'],
['correct',1],
[true,'Correct Answer'],
[false,'Wrong Answer']])

let question2 =new Map([['question', 'Who is the best footballer'],
[1,'Lionel Messi'],
[2,'Cristiano Ronaldo'],
[3,'Neymar'],
['correct',2],
[true,'Correct Answer'],
[false,'Wrong Answer']])

let question3=new Map([['question', 'Which is the best football club'],
[1,'Bayern Munich'],
[2,'Barcelona'],
[3,'Real Madrid'],
['correct',3],
[true,'Correct Answer'],
[false,'Wrong Answer']])


function DisplayQuestion(ques,input) {
this.ques=ques;
this.input=input;

console.log(this.ques.get('question'));
for(let [key, value] of this.ques){

if(typeof key === 'number'){
console.log(`${key}.Answer : ${value}`);

}
   
}
this.input=Number(prompt('1 or 2,3'))
if(this.ques.get('correct')===this.input){
          console.log(this.ques.get(true));
          console.log('---------------');
          
          }else{
               console.log(this.ques.get(false));
               console.log('---------------');
          }

}

DisplayQuestion(question1)
DisplayQuestion(question2)
DisplayQuestion(question3)




