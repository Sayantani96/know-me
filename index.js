var readlineSync = require("readline-sync");


var score=0;

//high scorers
var highScores=[{
  name:"Asish",
  score:5
},
 { 
   name:"Shanaya",
   score:4
  }];

//questions

var questions=[
  {
  question: "What is my birthday? ",
  answer:"10th September"
},
{
question:"What is my favourite fast food? ",
answer:"Momo"
 },
 {
   question:"Favourite place to travel: ",
   answer:"Countryside Bengal"
  },
{
   question:"Favourite flavour of kurkure: ",
   answer:"Green"
  },
{
   question:"Only programming language I have a little experience in: ",
   answer:"Javascript"
  }]

function welcome(){
  var user=readlineSync.question("What is your name? ");
  console.log("Welcome"+user+"to the quiz");
}

function play(question,answer){
   var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("Right answer");
    score++;
  }
  else{
    console.log("Wrong answer");
  }
   console.log("current score: ", score);
  console.log("-------------");
}

function game(questions){
  for(let i=0;i<questions.length;i++){
    play(questions[i].question,questions[i].answer);
  }
}

function showScores(){
   console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");
  highScores.map(score=>console.log(score.name, " : ", score.score));
}
welcome();
game(questions);
showScores();