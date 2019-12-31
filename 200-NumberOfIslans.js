/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const visitedMap = [];
    let num = 0;

    // initial map...
    for (let i = 0; i < grid.length; i++) {
        visitedMap[i] = [];
        for (let j = 0; j < grid[i].length; j++) {
            visitedMap[i][j] = false;
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (visitedMap[i][j] === false && grid[i][j] === '1') {
                num++;
                console.log(`visit from [${i}][${j}]`);
                dfs(grid, visitedMap, i, j);
            }
        }
    }

    return num;
};

const dfs = (grid, visitedMap, i, j) => {
    if (i < grid.length && i >= 0 &&
        j < grid[0].length && j >= 0 &&
        grid[i][j] === '1' && visitedMap[i][j] === false) {
        visitedMap[i][j] = true;

        dfs(grid, visitedMap, i + 1, j);
        dfs(grid, visitedMap, i, j + 1);
        dfs(grid, visitedMap, i - 1, j);
        dfs(grid, visitedMap, i, j - 1);
    }
}


console.log(numIslands([
    ['1', '1', '1', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '1', '0'],
    ['0', '0', '0', '0', '1'],
]));