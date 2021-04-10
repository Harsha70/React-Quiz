var readlineSync = require("readline-sync");
var chalk = require("chalk");
//

var score = 0;


readlineSync.question("Hi, Welcome to the react quiz. Enter any key to continue \n");


 var userName = readlineSync.question(chalk.white("What's your name? "));

console.log(chalk.white("Welcome  to the quiz! "+ userName ))

let userAnswer = readlineSync.question(
"\nDo you want to continue this quiz ? yes/no \n");

if (userAnswer.toLowerCase() === "yes") {
    console.log(chalk.white("\nOk, let me ask some questions to you.\n "))
} else if (userAnswer.toLowerCase() === "no") {
    console.log(chalk.green("\n Please get back when you want to give quiz"))
} else {
    console.log(chalk.white("Please answer in yes or no."))
}
if(userAnswer.toLowerCase()==="yes")
{

//  high scores
var highScores = [
  {
    name: "Harsha1",
    score: 4,
  },

  {
    name: "Harsha2",
    score: 3,
  },
]

// array of objects
var questions = [{ question :"What is state in react ? (a) An internal storage  (b) An windows local storage \n",
 answer :"a"},
{ question :"What is ReactJS? (a) Server side Framework (b) A Library for building interaction interfaces \n",
answer :"b"},
{question :"What is Redux? (a) a predictable state container (b) a session storage \n" ,
answer:"a"},
{question :"What is the DOM ReactJS uses? (a) Original DOM (b) Virtual DOM \n" ,
answer :"b"},
{ question :"Is react only responsible for view layer? (a)Yes (b) No \n",
answer :"a"}];



// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log(chalk.green("right!"));
    score = score + 1;
    
  } else {
    console.log(chalk.red("wrong!"));
   
  }

  console.log(chalk.yellow("current score: ", score));
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  if (score==0){
    console.log(chalk.white("Need to learn react"));
    console.log("YourScore="+score);
    console.log(chalk.bgwhite("Check out the high scores"))

  highScores.map(score => console.log(score.name, " : ", score.score))
  console.log("Thankyou"+ userName+" for playing this quiz")

  }
  else{
  console.log(chalk.bgCyan("YAY! You score: ", score));

  highScores.push({name:userName, score:score})

  console.log(chalk.white("Check out the high scores"))

  highScores.map(score => console.log(score.name, " : ", score.score))
  console.log(" Thankyou "+ userName+ " for playing this quiz")
}
}

game();
showScores();
}