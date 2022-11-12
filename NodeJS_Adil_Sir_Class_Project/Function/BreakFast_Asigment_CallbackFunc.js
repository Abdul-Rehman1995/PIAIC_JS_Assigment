//01  ---- First, Start making Breakfast
//02  ---- Start making a omelette immediately. this should take 5 second.
//03  ---- start making a pharata after 2 second. it should take 3 second to make.
//04  ---- start making a cofee after 4 second. it should be ready in 1 second.
//05  ---- while you are making breakfast, ask wife what she want for lunch - //she will respond after 10 seconds.
//06  ---- then ask her where to go for dinner - responde should be received immediately.

function omelette(cb) {
  setTimeout(() => {
    cb(`Your Omelatte is ready after 5 Sec`);
  }, 5000);
}
function pharata(cb) {
  setTimeout(() => {
    cb(`Your pharata is ready after 3 Sec`);
  }, 3000);
}
function cofee(cb) {
  setTimeout(() => {
    cb(`Your cofee is ready after 1 Sec`);
  }, 1000);
}
function lunch(cb) {
  setTimeout(() => {
    cb(`Hey Wify..!! You Want Something in Lunch in after 10 Sec`);
  }, 10000);
}
function Dinner(cb) {
  cb(
    `Hey Wify..!! Tell me where to go for dinner tonight - imediately response`
  );
}

omelette((Arguments) => {
  console.log(Arguments);
  pharata((Arguments) => {
    console.log(Arguments);
    cofee((Arguments) => {
      console.log(Arguments);
      lunch((Arguments) => {
        console.log(Arguments);
        Dinner((Arguments) => {
          console.log(Arguments);
        });
      });
    });
  });
});
