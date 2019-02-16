// add element to ad first element in the queue
// remove last element of the queue

// check if an element into a queue that is already full
// get an element from an empty queue


function QueueDataStructure () {
    this.queueStructure = [];
    this.queueMaxStructure = 8;
}

QueueDataStructure.prototype.addElement = function(element) {
    this.queueStructure.unshift(element);
}
QueueDataStructure.prototype.removeElement = function() {
    this.queueStructure.pop();
}
QueueDataStructure.prototype.checkOverFlow = function() {
    if(this.queueStructure.length >= this.queueMaxStructure) {
        alert("Overflow");
    }
}
QueueDataStructure.prototype.checkUnderFlow = function() {
    if(this.queueStructure == 0) {
        alert("Underflow")
    }
}

var queue1 = new QueueDataStructure();

