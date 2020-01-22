var array = [10, 3, 5, 12, 5, 3, 9, 1];
var element_count = [];
for (i = 0; i < array.length; i++) {
    count = 1;
    for (j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
            count++;
            element_count[j] = 0
        }
    }
    if (element_count[i] != 0) {
        element_count[i] = count;
    }
}
for (var i = 0; i < array.length; i++) {
    if (element_count[i] != 0)
        console.log(array[i] + "-" + element_count[i]);
}