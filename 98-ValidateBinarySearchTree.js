const Tree = require('./util/tree');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    const stack = [];
    let isBST = true;

    let node = root;
    let prevNode = null;

    while (stack.length > 0 || node !== null) {
        if (!isBST) {
            break;
        }

        if (node === null) {
            node = stack.pop();
            console.log(`pop ${node.val}, go right`);
            if(prevNode === null || prevNode.val < node.val) {
                prevNode = node;
                node = node.right === null ? null : node.right;
            } else {
                isBST = false;
                break;
            }
        } else {
            console.log(`push ${node.val}, go left`);
            stack.push(node);
            node = node.left;
        }
    }

    return isBST;
};

const root = Tree.createBinaryTree([2, 1, 3]);
console.log(isValidBST(root));