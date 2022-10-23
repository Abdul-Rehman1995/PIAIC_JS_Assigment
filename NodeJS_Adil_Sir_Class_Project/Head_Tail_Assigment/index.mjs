// to perform input and randon function need to add library
import promptSync from 'prompt-sync';
    const prompt = promptSync();

import randomInteger from 'random-int';
    const randomvalue = randomInteger(0,1);

// User and Computer Select One Of Them
    const choosing_values = ['Head', 'Tail'];

// First We Need to Store User Input Value
    const User_Input = prompt(" Type 0 For Head & 1 For Tail ");
    const Uservalue = choosing_values[User_Input];
    
    // First We Need to Store User Input Value
    let Comp_randomly_Select = randomvalue;    
    const Computer_choose = choosing_values[Comp_randomly_Select];

    
    // Condition For D/F OutCome Fetching
    let outcome = "ready to play";

    if (Uservalue === Computer_choose){
        outcome = "Draw";
    } else if(Uservalue === "Head" && Computer_choose === "Tail"){
        outcome = "User Choose Head and Computer Choose Tail & All Knows Head Always Wins";
    } else if(Uservalue === "Tail" && Computer_choose === "Head"){
        outcome = "Computer Choose Head and User Choose Tail & All Knows Head Always Wins";
    } else {
        outcome= " Invalid Entry ";
    }
    // For Output
    console.log("User Choose " + Uservalue);
    console.log("Computer Choose " + Computer_choose);
    console.log(outcome);
