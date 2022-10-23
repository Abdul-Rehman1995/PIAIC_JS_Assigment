import promptSync from 'prompt-sync';
    const prompt = promptSync();
import randomInteger from 'random-int';
    const Random_Int = randomInteger(0,2);

// Choice Select Any One
const Choice = ["rock","paper","scissors"];

// Computer Choose randomly
let Computer_Choice = Choice[Random_Int];

// User Choice
const UserInput = prompt(" 0 for Rock, 1 for Paper, or 2 for scissors ");
const User_Choice = Choice[UserInput];

let outcome = "ready to play";

if (Computer_Choice === User_Choice){
    outcome = "Draw";
} else if (Computer_Choice === "rock" && User_Choice === "paper" ){
    outcome = "Player Win";
} else if (Computer_Choice === "rock" && User_Choice === "scissors" ){
    outcome = "Computer Win";
} else if (Computer_Choice === "paper" && User_Choice === "rock" ){
    outcome = "Computer Win";
} else if (Computer_Choice === "paper" && User_Choice === "scissors" ){
    outcome = "Player Win";
} else if (Computer_Choice === "scissors" && User_Choice === "rock" ){
    outcome = "Player Win";
} else if (Computer_Choice === "scissors" && User_Choice === "paper" ){
    outcome = "Computer Win";
} else {
    outcome= " Invalid Entry ";
}


// output
console.log(" Computer Chooses " + Computer_Choice);
console.log(" Player Chooses " + User_Choice);
console.log(outcome);






