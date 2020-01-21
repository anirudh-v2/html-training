var array = [10, 3, 5, 12, 5, 3, 9, 1];

for (i = 0; i < array.length; i++) {
    count = 0;
    for (j = 0; j < array.length; j++) {
        if (array[i] == array[j]) {
            count++;
        }
    }
    console.log(array[i] + "-" + count);
}