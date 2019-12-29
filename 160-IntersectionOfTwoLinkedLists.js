/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let length1 = 0, length2 = 0;
    let ha = headA;
    while (ha !== null) {
        length1++
        ha = ha.next;
    }

    let hb = headB;
    while (hb !== null) {
        length2++
        hb = hb.next;
    }

    const sameLength = Math.min(length1, length2);
    console.log(`length1=${length1}, length2=${length2}, sameLength=${sameLength}`);

    ha = headA; hb = headB;
    for (let i = length1; i > sameLength; i--) {
        console.log('move ha...');
        ha = ha.next;
    }
    console.log(`ha=${ha.val}`);

    for (let i = length2; i > sameLength; i--) {
        console.log('move hb...');
        hb = hb.next;
    }
    console.log(`hb=${hb.val}`);

    while (ha != null && hb != null) {
        if (ha.val === hb.val) {
            return ha.val;
        }

        ha = ha.next;
        hb = hb.next;
    }
};

function createList(arr) {
    let node = new ListNode(arr[0]);
    const head = node;
    for (let i = 1; i < arr.length; i++) {
        node.next = new ListNode(arr[i]);
        node = node.next;
    }

    return head;
}

console.log(`result:${getIntersectionNode(
    createList([0, 9, 1, 2, 4]),
    createList([3, 2, 4]))}`);