var array = [10, 3, 5, 12, 5, 3, 9, 1];
for (i = 0; i < array.length; i++) {
    count = 1;
    for (j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
            count++;
            array[j] = 0
        }
    }
    if (array[i] != 0) {
        console.log(array[i] + "-" + count);
    }
}