import promptSync from 'prompt-sync';
const prompt = promptSync();

let Num = prompt(" Give Table Number ");

for (let x = 1; x <= 10; x++) {
    console.log(Num + ' * ' + x + ' = ' + Num * x);
}
