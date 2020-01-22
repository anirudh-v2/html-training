var array = [0 ,5 ,10, 3, 5, 12, 5, 3, 9, 1 ,0, 5];
for (i = 0; i < array.length; i++) {
    count = 1;
    for (j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
            count++;
            array[j] = null
        }
    }
    if (array[i] != null) {
        console.log(array[i] + "-" + count);
    }
}