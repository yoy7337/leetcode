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
 * @return {number[]}
 */
var rightSideView = (root) => {
    const view = [];

    traverseTree(root, 0, view);

    return view;
};

const traverseTree = (node, level, view) => {
    Log.d(`[traverseTree] node: ${node.val}, level=${level}, view: ${view}`);
    if (view[level] === undefined) {
        view[level] = node.val;
    }

    if (node.right !== null) {
        traverseTree(node.right, level + 1, view);
    }
    if (node.left !== null) {
        traverseTree(node.left, level + 1, view);
    }
}

const root = Tree.createBinaryTree([1, 2, 3, null, 5, null, 4]);
Log.d(rightSideView(root));
