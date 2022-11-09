import promptSync from 'prompt-sync';
    const prompt = promptSync();
    const UserInput = prompt(" Give a Table Number ");

    for (let x = 1; x <= 10; x++) {
        console.log(UserInput + ' * ' + x + ' = ' + UserInput * x);
    }