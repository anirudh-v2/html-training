const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter the number of rows `, (rows) => {
    for (let i = 1; i <= rows; i++) {

        let str = '';

        //left space
        for (let k = 1; k <= (rows - i); k++) {
            str = str + '  ';
        }
        //digit
        for (let j = 0; j != (2 * i - 1); j++) {
            str = str + '1 ';
        }
        console.log(str);
    }
    readline.close()
})