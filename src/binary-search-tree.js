const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.roo_t = null;
}

root() {
   return null
}

add(data) {

    this.roo_t = addIn(this.roo_t,data)
    
    function addIn(node, data)
    {
        if (!node){
            return new Node(data);
        }
        if(node.data === data){

            return node;
        }

        if (data<node.data){
            node.left = addIn(node.left, data)
        }
        else {
            node.right = addIn(node.right, data)
        }
        
        return node
        }
    }    

has(data) {
    return searchIn(this.roo_t, data)

    function searchIn (node, data) {
    if(!node) {
        return false;
    }

       if(node.data===data){ 
           return true
    }
    
    if(data<node.data){
        return searchIn(node.left, data)
    } else {return searchIn(node.right, data) }
    
    }  
}

find(data) {
    return searchIn(this.roo_t, data)

    function searchIn (node, data) {
    if(!node) {
        return false;
    }

       if(node.data===data){ 
           return node.data;
    }
    
    if(data<node.data){
        return searchIn(node.left, data)
    } else {return searchIn(node.right, data) }
    
    }  
}

remove(data) {

    this.roo_t = removeNode(this.roo_t, data);

    function removeNode(node, data){

        if(!node) {
            return null;
        }
        if(data<node.data){
            node.left = removeNode(node.left, data)
        } else if (data>node.data) {
            node.right = removeNode(node.right, data)
        } else {

            if((!node.left)&&(!node.right)){
                return null;
            }

            if(!node.left){
                node = node.right;
                return node;
            }

            if(!node.right){
                node = node.left;
                return node
            }

            let minRight = node.right;
            while (minRight.left){
                minRight = minRight.left;
            }
            node.data = minRight.data;

            node.right = removeNode(node.right, minRight.data)

            return node
        }



    }

}

min() {
  if (!this.roo_t){
      return false
  }
  let node = this.roo_t;
  while(node.left){
      node = node.left
  }
  return node.data;
}

max() {
   if (!this.roo_t){
       return false;
   }
   let node = this.roo_t;
   while(node.right)
   node = node.right;

return node.data;
}


}


module.exports = {
  BinarySearchTree
};