var stack=[];
function push(element){
    stack.push(element)
}

function pop(){
    stack.pop()
}
push(10)
push(20)
push(30)
console.log("elements pushed")
for(i in stack){
    console.log(stack[i]);
}
console.log("stack after pop")
pop()
for(i in stack){
    console.log(stack[i]);
}