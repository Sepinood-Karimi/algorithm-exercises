/**
Please implement the find and contains to the following Binary Search Tree
**/

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if (this.root === null) return undefined;
        let found = false;
        let currentNode=this.root;
        while (currentNode && !found){
            if (currentNode.value<value){
                currentNode=currentNode.right;
            }else if(currentNode.value>value){
                currentNode=currentNode.left
            }else{
                found=true;
            }
        }
        if (!found) return undefined;
        return currentNode;
    }
    contains(value){
        return this.find(value) !== undefined;
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);
bst.insert(20);


console.log(bst.find(10));
console.log(bst.find(5));
console.log(bst.find(20));
console.log(bst.find(100));

console.log(bst.contains(10));
console.log(bst.contains(5));
console.log(bst.contains(15));
console.log(bst.contains(2));
console.log(bst.contains(7));
console.log(bst.contains(12));
console.log(bst.contains(20));
console.log(bst.contains(24));
console.log(bst.contains(0));