// interface Node { parent: Node | null; left: Node | null; right: Node | null; value: number; }

/*
     5
   /  \
  3    7
 / \  /  \
2   4 6   8

given 3, return 4
given 4, return 5
given 7, return 8
given 8, return null
given

if right node is present, recurse with right node
if no right node is present, return parent,

*/
class Node {
  constructor(value, right = null, left = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

function insert(value, root = null) {
  if (!root) {
    return new Node(value);
  }

  if (value < root.value) {
    root.left = insert(value, root.left);
  } else {
    root.right = insert(value, root.right);
  }

  return root;
}

const keys = [5, 8, 31, 15, 82, 16, 41];

let tree = null;
for (const key of keys) {
  tree = insert(key, tree);
}

console.log(tree);

// const tree = {
//   value: 5,
//   left: {
//     value: 3,
//     left: { value: 2, left: null, right: null },
//     right: { value: 4, left: null, right: null },
//   },
//   right: {
//     value: 7,
//     left: { value: 6, left: null, right: null },
//     right: { value: 8, left: null, right: null },
//   },
// };

// function findSmallestNode(node) {
//   // if there's a left node, then get recur down to the leftmost node
//   // if there's no left node, return node
//   if (node.left) {
//     return findSmallestNode(node.left);
//   } else {
//     return node.value;
//   }
// }

// function findLargestNode(node) {
//   // if there's a right node, recur down to the rightmost node,
//   // if there's no right node, return node
//   if (node.right) {
//     return findLargestNode(node.right);
//   } else {
//     return node.value;
//   }
// }

// function findInOrderSuccessor(node, parentNode = null) {
//   if (node.right) {
//     return findSmallestNode(node.right);
//   } else if (node.left) {
//     return findLargestNode(node.left);
//   } else {
//     return parentNode.value;
//   }
// }

// console.log(findInOrderSuccessor(tree.right.right, tree.right));
