const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode ? this.rootNode : null;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
      return;
    }

    let cur = this.rootNode;

    while (cur) {
      if (data < cur.data) {
        if (cur.left === null) {
          cur.left = newNode;
          break;
        } else {
          cur = cur.left;
        }
      } else {
        if (cur.right === null) {
          cur.right = newNode;
          break;
        } else {
          cur = cur.right;
        }
      }
    }
  }

  has(data) {
    let cur = this.rootNode;

    while (cur) {
      if (cur.data === data) return true;

      cur = data < cur.data ? cur.left : cur.right;
    }

    return false;
  }

  find(data) {
    let cur = this.rootNode;

    while (cur) {
      if (data < cur.data) {
        cur = cur.left;
      } else if (data > cur.data) {
        cur = cur.right;
      } else return cur;
    }
    return null;
  }

  remove( data ) {
    let current = this.rootNode;
    let parent = null;

    while (current !== null && current.data !== data) {
      parent = current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    if (current === null) {
      return null;
    }
    if (current.left === null && current.right === null) {
      if (current === this.rootNode) {
        this.rootNode = null;
      } else if (parent.left === current) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }

    else if (current.left === null || current.right === null) {
      const child = current.left || current.right;
      if (current === this.rootNode) {
        this.rootNode = child; 
      } else if (parent.left === current) {
        parent.left = child; 
      } else {
        parent.right = child;
      }
    }
  
    else {
  
      let successor = current.right;
      let successorParent = current;

      while (successor.left !== null) {
        successorParent = successor;
        successor = successor.left;
      }
      current.data = successor.data;

      if (successorParent.left === successor) {
        successorParent.left = successor.right;
      } else {
        successorParent.right = successor.right;
      }
    }

    return true;
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }
    let cur = this.rootNode;
    while(cur.left){
      cur = cur.left;
    }

    return cur.data;
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }
    let cur = this.rootNode;

    while(cur.right){
      cur = cur.right;
    }

    return cur.data;
  }
}

module.exports = {
  BinarySearchTree,
};
