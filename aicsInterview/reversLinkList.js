function Node(val) {
    this.val = val;
    this.next = null;
}

const reverseLinklist = (root) => {
    let node = root;
    let node1 = node == null ? null : node.next;
    let node2 = node1 == null ? null : node1.next;
    while (!(node1 == null && node2 == null)) {
        if(node1 == null && node2 == null) {
            break;
        }

        console.log(`node=${node == null ? null : node.val}`);
        console.log(`node1=${node1 == null ? null : node1.val}`)
        console.log(`node2=${node2 == null ? null : node2.val}`)

        node1.next = node;
        node = node1;
        console.log(`node=${node == null ? null : node.val}`);
        node1 = node2;
        console.log(`node1=${node1 == null ? null : node1.val}`)
        node2 = node2 == null ? null : node2.next;
        console.log(`node2=${node2 == null ? null : node2.val}`)
    }

    console.log('done')
    return node;
}

const root = new Node(1);
let n2 = new Node(2);
root.next = n2;
let n3 = new Node(3);
n2.next = n3;
let n4 = new Node(4);
n3.next = n4;

const printLinkList = (root) => {
    const array = [];
    let node = root;
    while(node !== null) {
        array.push(node.val);
        node = node.next;
    }

    console.log(`printLinkList: ${JSON.stringify(array)}`);
}

printLinkList(root);
const result = reverseLinklist(root);
printLinkList(result);
