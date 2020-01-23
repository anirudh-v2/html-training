var array = [0, 5, 10, 3, 5, 12, 5, 3, 9, 1, 0, 5];
for (i = 0; i < array.length; i++) {
    count = 0;
    for (j = 0; j < array.length; j++) {
        if(j<i && array[i] == array[j]){
            break;
        }
        else if (array[i] == array[j]) {
             count++;
        }
    }
    if(count!=0){
        console.log(array[i] + "-" + count);
    }
}