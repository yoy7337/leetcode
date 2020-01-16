'use strict'

const Log = require('./log');

function GraphNode(val) {
    this.val = val;
    this.neighbors = [];
}

/**
 * @param {2D Array} input
 * ex:
 *  input: [[2,4],[1,3],[2,4],[1,3]]
 *  nodes:   (1)   (2)   (3)   (4)
 * 
 *  output:
 *
 *  (1) ---- (2)
 *   |        |
 *   |        |
 *  (4) ---- (3)
 * 
 */
const createGraph = (input) => {
    let nodes = [];
    for (let i = 0; i < input.length; i++) {
        nodes.push(new GraphNode(i + 1));
    }

    for (let i = 0; i < input.length; i++) {
        const param = input[i];
        const node = nodes[i];
        for (let j = 0; j < param.length; j++) {
            const neighborNode = nodes[param[j] - 1];
            node.neighbors.push(neighborNode);
        }
    }

    return nodes.length > 0 ? nodes[0] : null;
}

module.exports = {
    GraphNode,
    createGraph,
}