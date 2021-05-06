function LinkedList(){
    this.head = null;
    this.tail = null;
}

function Node(value, next, previous){
    this.value = value
    this.next = next
    this.previous = previous

}

// let node1 = new Node(100, "node2", null)

// console.log(node1)

LinkedList.prototype.addToHead = function(value){
    let newNode = new Node(value, this.head, null)
    if(this.head) {
        this.head.previous = newNode;
    }else{
        this.tail = newNode;
    }
    this.head = newNode;
}

LinkedList.prototype.addToTail = function(value){
    let newNode = new Node(value, null, this.tail)
    if(this.tail){
        this.tail.next = newNode;
    }else{
        this.head = newNode;
    }
    this.tail = newNode;
}
let ll = new LinkedList()

LinkedList.prototype.removeHead = function(){
    // if the link list is empty
    if(!this.head){
        return null
    }
    let val = this.head.value
    this.head = this.head.next
    if(this.head){
        this.head.previous = null;
    }else{
        this.tail = null
    }
    return val;
}
LinkedList.prototype.removeTail = function(){
    if(!this.tail){
        return null
    }
    let val = this.tail.value
    this.tail = this.tail.previous
    if(this.tail){
        this.tail.next = null
    }else{
        this.tail = null
    }
    return val
}

LinkedList.prototype.search = function(searchValue){
    let currentNode = this.head
    while(currentNode){
        if(currentNode.value === searchValue){
            return currentNode.value
        }
        currentNode = currentNode.next
    }
    return null;
}
LinkedList.prototype.indexOff=function(value){
    let currentNode = this.head
    let index = 0;
    let result = [];
console.log(currentNode)
    while(currentNode){
        if(currentNode.value === value){
            result = [...result, index ]
        }
        currentNode = currentNode.next
        index++
    }
    return result
}

ll.addToHead(3)
ll.addToHead("hello")
ll.addToHead(37)
ll.addToHead(3)

console.log(ll.indexOff(3))






