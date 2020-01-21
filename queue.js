var queue = [];
function push(element) {
    queue.push(element)
}

function pop() {
    queue.pop()
}

push(10)
push(20)
push(30)
console.log("elements in queue")
for(i=queue.length-1; i>=0 ; i--){
    console.log(queue[i]);
}
pop()
console.log("queue after pop")
for(i=queue.length-1; i>=0 ; i--){
    console.log(queue[i]);
}