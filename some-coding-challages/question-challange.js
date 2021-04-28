(function(){

     function Question(ques,answers,correct) {
          this.ques =ques;
          this.answers = answers;
          this.correct=correct
          
          }
          Question.prototype.displayQuestion = function(){
          console.log(this.ques);
          
          for(let i=0 ;i<this.answers.length ;i++){
               console.log(i+'.'+this.answers[i])
          }
          
          }
          
          
          Question.prototype.corrctAnswer = function(ans){
               if(ans==this.correct){
                    console.log('Correct Answer and reload again for next qustion')
               }else{
                    console.log('Wrong Answer and reload again for next qustion')
               }
          }
          
          let number= Math.floor(Math.random()*5)
          
          let ask0=new Question('Who is the best footballer?',['Cristiano Ronaldo','Lionel Messi','Kylian Mbappe'],0)
          
          let ask1=new Question('How Many Champions league tropy has Real Madrid won?',[10,13,5],1)
          
          let ask2=new Question('Who has staged the best retirement drama in the football history ?',['Lionel Messi','Zlatan Ibrahimovic','None'],0)
          
          let ask3=new Question('Who has no international trophy in entire career?',['Cristiano Ronaldo','Lionel Messi','Neymar jr.'],1)
          
          let ask4=new Question('Who is the best Defensive Midfielder?',['N\'Golo Kante','Casemiro','Rodrigo'],1)
          
          let questions =[ask0,ask1,ask2,ask3,ask4]
          questions[number].displayQuestion()
          let input=prompt('Type 0 1 or 2 for selecting correct Answer')
          questions[number].corrctAnswer(input)
})()