// implement the pop functionality



class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
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

let myStack = new Stack();
console.log(myStack.push(10));
console.log(myStack.push(20));
console.log(myStack.push(30));
console.log(myStack.push(40));

console.log(myStack.pop());
console.log(myStack.size);
console.log(myStack.pop());
console.log(myStack.size);
console.log(myStack.pop());
console.log(myStack.size);
console.log(myStack.pop());
console.log(myStack.size);
console.log(myStack.pop());

