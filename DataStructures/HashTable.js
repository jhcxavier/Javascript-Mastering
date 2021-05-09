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
    }else{
        let currentNode = this.buckets[index];
        while(currentNode.next){
            currentNode = currentNode.next
        }
        currentNode.next = new HashNode(key, value)
    }

}

let myHT = new HashTable(30)

myHT.insert("Dean", "dean@gmail.com")
myHT.insert("Joe", "joe@gmail.com")
myHT.insert("Smith", "smith@gmail.com")
console.log(myHT.buckets)