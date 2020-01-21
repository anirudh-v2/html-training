var stack = [];
function push(element) {
    stack.push(element)
}

function pop() {
    stack.pop()
}
function printStack() {
    for (i in stack) {
        console.log(stack[i]);
    }
}
push(10)
push(20)
push(30)
console.log("elements pushed")
printStack()

pop()
console.log("stack after pop")
printStack()