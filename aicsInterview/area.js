let areaCount = 0;
let result = 0;

const maxArea = (matrix) => {
    const map = [
    ]

    for (let i = 0; i < matrix.length; i++) {
        map.push([]);
        for (let j = 0; j < matrix[0].length; j++) {
            map[i].push(null);
        }
    }

    for(let i=0; i<matrix.length;i++) {
        for(let j=0; j<matrix[0].length; j++) {
            if(map[i][j] === null) {
                areaCount = 0;
                find(matrix, map, i, j);
                if(areaCount > result) {
                    result = areaCount;
                }
            }
        }
    }

    // let i = 0, j = 0;
    // find(matrix, map, i, j);
}

const find = (matrix, map, i, j) => {
    if (i >= matrix.length || i < 0) {
        return;
    }
    if (j >= matrix[0].length || j<0) {
        return;
    }
    if (map[i][j] !== null) {
        return;
    }

    if (matrix[i][j] == 0) {
        map[i][j] = 0;
    } else {
        map[i][j] = 1;
        console.log(`count=${areaCount}`);
        areaCount++;
        find(matrix, map, i + 1, j, areaCount);
        find(matrix, map, i - 1, j, areaCount);
        find(matrix, map, i, j + 1, areaCount);
        find(matrix, map, i, j - 1, areaCount);
    }
}

const matrix = [
    [1, 1, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 1, 0, 1, 0],
]

console.log(matrix);
maxArea(matrix);
console.log(`max is ${result}`)