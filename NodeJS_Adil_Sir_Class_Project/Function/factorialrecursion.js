//recursive function Assigment
function recursive(x) {
    if(x > 10){
        console.log(x);
        return recursive(--x);
    } else {
        console.log('function will be run when the value greater than 10');
    } 
}
console.log(recursive(15));


// function factorial(nr) {
//     console.log(nr);
//     if(nr === 0){
//         return 1;
//     } else{
//         return nr * factorial(--nr);
//     }
// }
// console.log(factorial(5));

