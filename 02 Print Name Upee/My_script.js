

//Assigment Two __ Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


// THERE ARE MANY JS STRING 


// Mystring Store in S_name
let S_name = "abDul ReHmAn kHAn";

// toLowerCase() converts a string to lowercase letters
let lowercase_result = S_name.toLowerCase();

// toUpperCase() method converts a string to uppercase letters
let uppercase_result = S_name.toUpperCase();

// toTitleCase() is not a pre defined method in JS Script basically below mention function shows it capitalize first letter of each word in paragraph
// split() splits refers a string into an array of substrings and returns the array
// map() method creates a new array from the results of calling a function for every element
// slice() returns selected array elements as a new array
// toLowerCase() converts a string to lowercase letters
// toUpperCase() method converts a string to uppercase letters
// CharAt used to Get the first character in a string
// join() returns an array as a string
// return statement stops the execution of a function and returns a value


        let fetch_first_alphabet = S_name.charAt(0); // Fetch First Alphabet
        let Capital_the_alphabet = fetch_first_alphabet.toUpperCase(); // First Alphabet Must Be Capital
        let remaining_alphabet = S_name.slice(1);  // Store remaining Alphabet 
        let Lower_the_remaining_alphabet = remaining_alphabet.toLowerCase(); // other Alphabet Must Be Small
        let First_alphabet_capital = Capital_the_alphabet + Lower_the_remaining_alphabet // merge the alphabet "First Capital letter & Second Remaining Smallest Alphabet"
        
        /* Note : due to  Capitilize the first letter in each word i need to perform split(' ').map()*/
        let toTitleCase = First_alphabet_capital.split(' ').map(
            function (word) {
                return (word.charAt(0).toUpperCase() + word.slice(1));
            }
        ).join(' '); // due to split shows "," between words that why i use join() to returns an array as a string



  