'use strict'

const Graph = require('./util/graph');
const Log = require('./util/log');

/**
 * // Definition for a Node.
 * function Node(val, next) {
 *    this.val = val;
 *    this.neighbors = [];
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */

const nodes = {};
var cloneGraph = function (node) {
    copyGraph(node);
    return nodes[1];
};

const copyGraph = (node) => {
    const { cloneNode, created } = addNode(node);
    Log.d(`cloneGraph: ${cloneNode.val}`);

    const neighbors = node.neighbors;
    for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        const { cloneNode: neighborNode, created: neighborCreated } = addNode(neighbor);
        cloneNode.neighbors.push(neighborNode);
        Log.d(`cloneGraph: ${cloneNode.val} neighbor: ${neighborNode.val}`);
        if (!neighborCreated) {
            copyGraph(neighbor);
        }
    }
}

const addNode = (node) => {
    let cloneNode;
    let created = false;
    if (nodes[node.val] === undefined) {
        cloneNode = new Graph.GraphNode(node.val);
        nodes[node.val] = cloneNode;
    } else {
        cloneNode = nodes[node.val];
        created = true;
    }

    return { cloneNode, created };
}

const node = Graph.createGraph([[2, 4], [1, 3], [2, 4], [1, 3]]);
cloneGraph(node);

/*
Log.d(JSON.stringify(node.val));

let neighbors = node.neighbors;
for (let i = 0; i < neighbors.length; i++) {
    Log.d(JSON.stringify(node.neighbors[i].val));
}*/