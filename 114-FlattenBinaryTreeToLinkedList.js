const
    Tree = require('./util/tree'),
    Log = require('./util/log');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    const traceStack = [];
    const outQueue = [];
    preOrder(root, traceStack, outQueue);
    if (outQueue.length <= 1) {
        return;
    }

    let node = root;
    node.left = null;

    for (let i = 1; i < outQueue.length; i++) {
        node.right = outQueue[i];
        node.left = null;
        node = outQueue[i];
    }

    node.left = null;
    node.right = null;
};

const preOrder = (node, traceStack, outQueue) => {
    if (node !== null) {
        traceStack.push(node);
        outQueue.push(node);
        preOrder(node.left, traceStack, outQueue);
    } else if (traceStack.length > 0) {
        node = traceStack.pop();
        preOrder(node.right, traceStack, outQueue);
    }
}

const root = Tree.createBinaryTree([1, 2, 5, 3, 4, null, 6]);
flatten(root);