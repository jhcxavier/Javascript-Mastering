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

// ll.addToHead(100)
// ll.addToHead(200)
// ll.addToHead(300)
ll.addToTail(1)
ll.addToTail(2)
ll.addToTail(3)
ll.addToHead(100)
console.log(ll.tail.previous.previous.previous)