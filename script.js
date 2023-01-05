let RPS = ["R", "P", "S"]; // R for Rock, P or Paper, S for Scissors.

let UserInput = prompt("Lets play Rock, Paper and Scissors");


//function getRandomInt(max) {
  let computerChoice =  Math.floor(Math.random() * RPS.length); 
  let computerChoice = RPS ;
   
  if (UserInput === computerChoice) {
    ties++;
    window.alert("It's a tie!");
  }
  
 // if (UserInput )

//}
console.log(getRandomeInt(3))