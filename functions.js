function addf(num1) {
    return function(num2){
        return num1 +num2;
    };
}   
console.log(addf(3)(4))
