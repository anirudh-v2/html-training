// Write a function that takes an argument and returns that argument.
function identify(num) {
    return num;
}
// Write two binary functions, add and mul, that take two numbers and return their sum and product
function add(num1, num2) {
    return num1 + num2;
}
function mul(num1, num2) {
    return num1 * num2;
}

// Write a function that takes an argument and returns a function that returns that argument.

var idf = identify(3);

// write a function that adds from two invocations
function addf(num1) {
    return function (num2) {
        return add(num1, num2);
    };
}
// write a function that takes a binary function and makes it callable with two invocations
function applyf(binaryf) {
    return function (num1) {
        return function (num2) {
            return binaryf(num1, num2)
        }
    }
}
addf = applyf(add);
// write a function that takes a function and an argument, and returns a function that cans supply a second argument
function curry(binary, num1) {
    // console.log(arguments[0]);
    // console.log(arguments[1]);

    return function (num2) {
        return binary(num1, num2)
    }
}

function inc(num){
    
}