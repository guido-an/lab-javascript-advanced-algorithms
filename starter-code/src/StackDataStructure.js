
//  add the right methods to add elements to the structure,
// and methods to remove elements from it


// one to check if we can add new elements to the stack (to avoid the stack overflow), 
// and another one to check if we can take an element from the stack (to avoid the stack underflow).

function StackDataStructure () {
    this.stackStructure = [];
    this.maxStackLength = 10;
}

StackDataStructure.prototype.addElement = function(element) {

      if (this.isOverFlow() == false ) {
        this.stackStructure.push(element);
      } else {
        alert("overflow");
      }
}
StackDataStructure.prototype.removeElement = function() {
      if (this.isUnderFlow() == false) {
        this.stackStructure.pop()
      } else {
          alert("underflow");
      }
}
StackDataStructure.prototype.isOverFlow = function() {
    if (this.stackStructure.length >= this.maxStackLength) {
        return true;    
    } else {
        return false;
    }
}
StackDataStructure.prototype.isUnderFlow = function() {
    if (this.stackStructure.length == 0) {
        alert("Underflow!")
        return true;
    } else {
        return false;
    }
}

var stack1 = new StackDataStructure(); 


/*** DOM ***/



