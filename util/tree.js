const Log = require('./log');

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {*} nodes
 * ex:
 * [1,2,3,null,5,null,4]
 *      1
 *    /   \
 *   2     3
 *    \     \
 *     5     4
 */
const createBinaryTree = (nodes) => {
    const root = new TreeNode(nodes[0]);
    const treeNodes = [root];
    for (let i = 1; i < nodes.length; i++) {
        const node = nodes[i];
        const treeNode = node === null ? null : new TreeNode(node);
        treeNodes.push(treeNode);

        if (treeNode === null) {
            continue;
        }

        const parentIndex = Math.floor((i + 1) / 2) - 1;
        const parentNode = treeNodes[parentIndex];
        if (i % 2 === 1) {
            parentNode.left = treeNode;
        } else {
            parentNode.right = treeNode;
        }
    }

    return root;
}

module.exports = {
    TreeNode,
    createBinaryTree,
}