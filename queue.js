/**
  Please add dequeue function to the following Queue 
**/



class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        const currentFirstNode = this.first;

        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;

        return currentFirstNode.value;


    }
}

const myQueue = new Queue();
console.log(myQueue.enqueue(10));
console.log(myQueue.enqueue(20));
console.log(myQueue.enqueue(30));
console.log(myQueue.enqueue(40));

console.log(myQueue.dequeue());
console.log(myQueue.size);
console.log(myQueue.dequeue());
console.log(myQueue.size);
console.log(myQueue.dequeue());
console.log(myQueue.size);
console.log(myQueue.dequeue());
console.log(myQueue.size);
console.log(myQueue.dequeue());