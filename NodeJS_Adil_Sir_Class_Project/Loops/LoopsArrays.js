

const myWork = [];

for (let i = 1; i < 11; i++) {
    
   let status = i % 2 ? true : false;
    let temp = {
        Sname: 'Lesson' + i,
        status: status,
    }
    myWork.push(temp)
}

console.log(myWork);
