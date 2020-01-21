var queue = [];
function push(element) {
    queue.push(element)
}

function pop() {
    queue.pop()
}
function displayQueue(){
    for(i=queue.length-1; i>=0 ; i--){
        console.log(queue[i]);
    }
}
push(10)
push(20)
push(30)
console.log("elements in queue")
displayQueue();
pop()
console.log("queue after pop")
displayQueue()