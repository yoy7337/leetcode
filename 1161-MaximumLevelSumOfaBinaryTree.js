/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

let maxCount = 0;
let maxlevel = 1;
var maxLevelSum = function (root) {
    let queue = [root];
    maxCount = root.val;

    goThroughLevel(queue, 2);

    return maxlevel;
};

const goThroughLevel = (queue, level) => {
    let levelCount = queue.length;
    let levelVal = 0;
    while (levelCount > 0) {
        let node = queue.shift();
        levelCount--;
        if (node.left !== null) {
            levelVal += node.left.val;
            queue.push(node.left);
        }

        if (node.right !== null) {
            levelVal += node.right.val;
            queue.push(node.right);
        }
    }

    if (levelVal > maxCount) {
        maxCount = levelVal;
        maxlevel = level;
    }

    if (queue.length > 0) {
        goThroughLevel(queue, level + 1);
    }
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const n1 = new TreeNode(1);
const n2 = new TreeNode(7);
const n3 = new TreeNode(0);
const n4 = new TreeNode(7);
const n5 = new TreeNode(-8);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;

console.log(`maxLevelSum=${maxLevelSum(n1)}`);
