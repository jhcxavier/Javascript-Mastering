function BST(value){
    this.value = value;
    this.left = null;
    this.right= null;
}

BST.prototype.insert = function(value){
    if(value <= this.value){
        if(!this.left){
            this.left = new BST(value)
        }else{
            this.left.insert(value)
        }

    }else if(value > this.value){
        if(!this.right){
            this.right = new BST(value)
        }else{
            this.right.insert(value)
        }
    }
}

const bst = new BST(50);
bst.insert(30)
bst.insert(25)
bst.insert(57)
bst.insert(1)
bst.insert(9)
bst.insert(72)
bst.insert(63)
bst.insert(105)
console.log(bst.left.left.left.right)