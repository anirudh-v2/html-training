const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter the number of rows `, (rows) => {
    for (let i = 1; i <= rows; i++) {
        var c = 1;
        var str = '';
        for (let k = 1; k <= (rows - i); k++) {
            str = str + ' ';
        }
        for (let j = 1; j <= i; j++) {
            str = str + c + ' ';
            c = c * (i - j) / j;
        }
        console.log(str)
    }
    readline.close()
})