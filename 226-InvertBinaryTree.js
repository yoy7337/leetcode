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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    //inverseChildDFS(root);
    inverseChildBFS(root);
};

const swipeChild = (node) => {
    let lNode = node.left;
    node.left = node.right;
    node.right = lNode;
}

const inverseChildDFS = function (root) {
    if (root === null) {
        return;
    }

    console.log(`[inverseChild] root=${root.val}`);

    swipeChild(root);

    if (root.left) {
        console.log(`[inverseChild] inverse: ${root.left.val}`);
        inverseChildDFS(root.left);
    }

    if (root.right) {
        console.log(`[inverseChild] inverse: ${root.right.val}`);
        inverseChildDFS(root.right);
    }
}

const inverseChildBFS = function (root) {
    if (root === null) {
        return;
    }

    const queue = [root];
    while (queue.length > 0) {
        let remind = queue.length;
        while(remind > 0) {
            let node = queue.shift();
            remind --;

            swipeChild(node);
            console.log(`swipe ${node.val}`)

            if(node.left !== null) {
                queue.push(node.left);
            }

            if(node.right !== null) {
                queue.push(node.right);
            }
        }
    }
}

const root = Tree.createBinaryTree([4, 2, 7, 1, 3, 6, 9]);

invertTree(root);