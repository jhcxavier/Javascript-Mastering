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

BST.prototype.contains = function(value){
    if(value === this.value) return true
    else if(value < this.value){
        if(!this.left) return false
        else return this.left.contains(value)
    }else if(value > this.value){
        if(!this.right) return false
        else return this.right.contains(value)
    }
}

BST.prototype.depthFirstTraversal=function(iteratorFunc){
    if(this.left)this.left.depthFirstTraversal(iteratorFunc);
    iteratorFunc(this.value)
    if(this.right)this.right.depthFirstTraversal(iteratorFunc);
}

const bst = new BST(50);
bst.insert(30)
bst.insert(25)
bst.insert(57)
bst.insert(1)
bst.insert(9)
bst.insert(72)
bst.insert(63)
bst.insert(110)
bst.insert(105)
console.log(bst.depthFirstTraversal(log))

function log(value){
    console.log(value)
}