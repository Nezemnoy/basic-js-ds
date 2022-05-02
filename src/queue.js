const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

 class Node {
  constructor(val){
  this.val = val;
  this.next = null;
  }

}
class Queue {

  constructor(){
    this.first=0;
    this.last=0;
    this.size=0
  }

  getUnderlyingList() {
        
    let list = null;
    let revtList = null;
    let currentNode = this.first;
    let arrList =[];

    while(currentNode)
    {


    list = {value: currentNode.val, next: list};
    arrList.push(list.value)
    currentNode = currentNode.next

    }


for (let i = arrList.length-1; i>=0; i--)
{
revtList = {value: arrList[i], next: revtList};

}
    return  revtList
    
  }

  enqueue(val) {
      let newNode = new Node(val);

      if(!this.first) {
          this.first = newNode;
          this.last = newNode;
      }
      else {
          this.last.next = newNode;
          this.last = newNode;
      }
      this.size++   
  }

  dequeue() {

      if (!this.first) {return null}

  else {

      let buf = this.first;
      if (this.first===this.last){
          this.last=null;
      }
      this.first = this.first.next
      
      console.log (buf.val);
      return buf.val;
  } 

  }
 
}

module.exports = {
  Queue
};
