const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let arrList =[];
  let list = null;


  while (l) {
      arrList.push(l.value)
      l = l.next;  
    }
  
    for (let i=0; i<arrList.length; i++)
    {
          if (arrList[i]===k)
              {
                  arrList.splice(i,1)
                  i=i-1;
              }
    }


   for (let i = arrList.length-1; i>=0; i--)
{
  list = {value: arrList[i], next: list};

}
     
    return  list

}


module.exports = {
  removeKFromList
};
