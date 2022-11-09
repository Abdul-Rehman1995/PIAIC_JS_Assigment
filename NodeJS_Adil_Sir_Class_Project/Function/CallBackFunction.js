

// function EnglishQuran(Para) {
//     switch (true) {
//         case Para === "A":
//             console.log("Recite Para No " , Para, ": Alif Lam Meem");
//             break;
//         case Para === "B":
//             console.log("Recite Para No " , Para , ": Sayaqool");
//             break;
//         case Para === "C":
//             console.log("Recite Para No " , Para , ": Tilkal Rusull");
//             break;
//         default:
//             console.log("Try Again");
//     }
// }
// function UrduQuran(Para) {
//     switch (true) {
//         case Para === "A":
//             console.log("Quran kareem Phrna Ha" , Para, ": Alif Lam Meem");
//             break;
//         case Para === "B":
//             console.log("Quran kareem Phrna Ha" , Para , ": Sayaqool");
//             break;
//         case Para === "C":
//             console.log("Quran kareem Phrna Ha" , Para , ": Tilkal Rusull");
//             break;
//         default:
//             console.log("Try Again");
//     }
// }

// function fetch_result(number, callback) {
//     let Para;
//     switch (true) {
//         case number === 1:
//             Para = "A";
//             break;
//         case number === 2:
//             Para = "B";
//             break;
//         case number === 3:
//             Para = "C";
//             break;
//         default:
//             Para = "Try Again";
//     }
//     callback(Para);
// }

// fetch_result(2, EnglishQuran);
// fetch_result(2, UrduQuran);




// let fun1 = () => {
//     setTimeout ( ()=>{ 
//         console.log(`Hi Rehman`);
//     }, 3000);
    
// }
// let fun2 = () => {
//     console.log(`Hi zaid`);
// }

// fun1();
// fun2();


// let fun1 = () => {
//     setTimeout ( ()=>{ 
//         console.log(`Hi Rehman`);
//         fun2();
//     }, 3000);
    
// }
// let fun2 = () => {
//     console.log(`Hi zaid`);
// }

// fun1();

let Students = (totalstudents, Give_Function_Name_You_Want_To_Call)=>{
    console.log(`Since 2010 i have total number of student is ${totalstudents}`);
    Give_Function_Name_You_Want_To_Call();
}
let newStudents = ()=>{
    console.log(`today, i have few new students, could you add these new students in your Students list`);
}
Students(10, newStudents);
//newStudents();







