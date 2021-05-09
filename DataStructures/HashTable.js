function HashTable(size){
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length
}

function HashNode(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null;
}

HashTable.prototype.hash = function(key){
    let total = 0;
    for( let i in key){
        total += key.charCodeAt(i)
    }
    return total % this.numBuckets;
}
HashTable.prototype.insert = function(key, value){
    let index = this.hash(key);
    console.log("index: ",index)
    if(!this.buckets[index]){
        this.buckets[index] = new HashNode(key, value)
    }else if(this.buckets[index].key === key){
        this.buckets[index].value = value;
    }else{
        let currentNode = this.buckets[index];
        while(currentNode.next){
            if(currentNode.next.key === key){
                currentNode.next.value = value;
                return
            }
            currentNode = currentNode.next
        }
        currentNode.next = new HashNode(key, value)
    }

}

HashTable.prototype.getMethod=function(key){
    let index = this.hash(key)
    if(!this.buckets[index]){
        return null
    }else{
        let currentNode = this.buckets[index]
        while(currentNode){
              if(currentNode.key === key){
                return currentNode.value;
            }
            currentNode = currentNode.next
        }
        return null
    }
}

HashTable.prototype.retrieveAll = function(){
    let result= []
    for(let i = 0; i < this.numBuckets; i++){
        let currentNode = this.buckets[i]
        while(currentNode){
            result = [...result, currentNode]
            currentNode = currentNode.next
        }
    }
    return result;

}
let myHT = new HashTable(30)

myHT.insert("Dean", "dean@gmail.com")
myHT.insert("Joe", "joe@gmail.com")
myHT.insert("Smith", "smith@gmail.com")
// console.log(myHT.buckets)
myHT.insert("Smith", "smith111@gmail.com")
myHT.insert("Joe", "joe1@aol.com")
console.log(myHT.retrieveAll())