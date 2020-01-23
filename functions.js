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
// addf = applyf(add);
// write a function that takes a function and an argument, and returns a function that cans supply a second argument
function curry(binary, num1) {
    // console.log(arguments[0]);
    // console.log(arguments[1]);

    return function (num2) {
        return binary(num1, num2)
    }
}
// write a function twice that takes a binary function and returns  a unary function  that passes its argument to the  binary function twice.

function twice(binaryf) {
    return function (num) {
        return binaryf(num, num)
    }
}

var double = twice(add);
var square = twice(mul);
// write a function composeu that takes two unary functions  and returns a unary function that can ball them both

function compose(double, square) {
    return function (num) {
        return square(double(num))
    }
}
//Write  methodize, a function that converts a binary function to a method.

function methodize(binary) {
    return function (num) {
        return binary(this, num)
    }
}

Number.prototype.add = methodize(add);


//without writing a new functions ( use the functions implemented in above questions) ), show three ways to create the inc function.

inc = addf(1)
inc = applyf(add)(1)
inc = curry(add,1)
