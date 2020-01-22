const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter the number of rows `, (rows) => {
    for (let i = 1; i <= rows; i++) {

        let str = '';

        //left space
        for (let k = 1; k <= (rows - i); k++) {
            str = str + '   ';
        }
        //left triangle
        for (let j = i; j != (2 * i); j++) {
            if (j >= 10) {
                str = str + j + ' ';

            }
            else {
                str = str + j + '  ';

            }

        }
        //right triangle
        for (let k = (2 * i) - 2; k >= i; k--) {
            if (k >= 10) {
                str = str + k + ' ';

            }
            else {
                str = str + k + '  ';

            }
        }
        console.log(str);
    }
    readline.close()
})