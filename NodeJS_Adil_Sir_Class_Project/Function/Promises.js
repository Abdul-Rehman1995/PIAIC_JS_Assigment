//Excercise 01
// counter = 0;
// function CounterIncrement(value){
//   return new Promise(resolve => {
//     setTimeout(() => {
//       counter++;
//       resolve(`x value : ${value} & counter : ${counter} `);
//     }, 1000);
//   });
// };

// async function async1_function(value) {
//   console.log(`x value : ${value} & counter : ${counter} `);
//   let resolvevalue = await CounterIncrement(value);
//   console.log(resolvevalue);
// }
// for (let i = 1; i < 4; i++) {
//   async1_function(i);
// }

//Excersise 2
// function CofeeShop(Items) {
//   return new Promise( (resolve) => {
//     setTimeout(() => {
//         resolve(`${Items} is ready.`);
//     }, 3000);
//   });
// };

// async function yourOrders(Items){
//     let result = await CofeeShop(Items);
//     console.log(result);
// }

// yourOrders(`Cold Cofee`);
// yourOrders(`Hot Cofee`);

// Excersise 03 Password Checker
const allowedPasswords = ["Pass1", "Pass2", "Pass3"];
function checkPassword(password) {
  return allowedPasswords.includes(password);
}
function login(password) {
  return new Promise((resolve, reject) => {
    if (checkPassword(password)) {
      resolve({ status: false });
    } else {
      reject({ status: true });
    }
  });
}
function checker(password) {
  login(password)
    .then((value) => {
      console.log(`Authorize User`);
      console.log(value);
    })
    .catch((value) => {
      console.log(`Un-Authorize User`);
      console.log(value);
    });
}
checker("Pass1");
checker("Pass5");
