const Tree = require('./util/tree');
const Log = require('./util/log');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function (root, p, q) {
    dfs(root, p, q);

    return resultNode;
};

const stack = [];
let resultNode = null;

const dfs = (root, p, q) => {
    if (resultNode !== null) {
        //Log.d(`resultNode=${resultNode.val}`);
        return resultNode;
    }

    if (root === null) {
        return;
    }

    //console.log(`root=${root.val}`);

    stack.push(root);

    if (p.val === root.val || q.val === root.val) {
        //console.log(`find q or q, stack.length=${stack.length}`);
        for (let i = stack.length - 1; i >= 0; i--) {
            const node = stack[i];
            node.aCount = node.aCount !== undefined ? 2 : 1;
            //Log.d(`node(${node.val}) cont(${node.aCount})`);
            if (node.aCount == 2) {
                resultNode = node;
                break;
            }
        }
    }

    dfs(root.left, p, q);
    dfs(root.right, p, q);

    if (stack.length > 0) {
        stack.pop();
    }
}

const root = Tree.createBinaryTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
const node = lowestCommonAncestor(root, new Tree.TreeNode(5), new Tree.TreeNode(4));
Log.d(`node=${node == null ? null : node.val}`);