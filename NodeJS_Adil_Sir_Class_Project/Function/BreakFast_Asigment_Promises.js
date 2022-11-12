//01  ---- First, Start making Breakfast
//02  ---- Start making a omelette immediately. this should take 5 second.
//03  ---- start making a pharata after 2 second. it should take 3 second to make.
//04  ---- start making a cofee after 4 second. it should be ready in 1 second.
//05  ---- while you are making breakfast, ask wife what she want for lunch - //she will respond after 10 seconds.
//06  ---- then ask her where to go for dinner - responde should be received immediately.
function omelette() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Your omelette was ready in a 5 Sec`);
      reject(`your omeletter is not ready`);
    }, 5000);
  });
}
function pharata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Your pharata was ready in a 3 Sec`);
      reject(`your pharata is not ready`);
    }, 3000);
  });
}
function cofee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Your cofee was ready in a Sec`);
      reject(`your cofee is not ready`);
    }, 1000);
  });
}
function Lunch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Dear Wifey..!! 10 Sec is enough to knew... What you want to eat in Lunch`);
      reject(`Wifey Not In Mood For Lunch`);
    }, 10000);
  });
}
function Dinner() {
  return new Promise((resolve, reject) => {
    resolve(`Dear Wifey..!! Don't need to know Where you want to go for Dinner`);
    reject(`Wifey Not In Mood For Dinner`);
  });
}

omelette()
  // For Resolve Result We Used omelette
  .then((Arg) => {
    console.log(Arg);
    return pharata();
  })
  // For Resolve Result of pharata in upper .then log return the pharata function
  .then((Arg) => {
    console.log(Arg);
    return cofee();
  })
  // For Resolve Result of cofee in upper .then log return the cofee function
  .then((Arg) => {
    console.log(Arg);
    return Lunch();
  })
  // For Resolve Result of Lunch in upper .then log return the Lunch function
  .then((Arg) => {
    console.log(Arg);
    return Dinner();
  })
  // For Resolve Result of Dinner in upper .then log return the Dinner function
  .then((Arg) => {
    console.log(Arg);
  })
  // For Reject if any function rejected the Result We Used
  .catch((error) => {
    console.log(error);
  });
