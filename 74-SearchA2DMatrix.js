/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const rows = matrix.length;
    const cloumns = rows > 0 ? matrix[0].length : 0;
    let row = 0, cloumn = 0;

    console.log(`[searchMatrix] rows=${rows}, cloumns=${cloumns}`);
    if (rows === 0) {
        return false;
    }

    row = searchRow(matrix, target, rows);
    console.log(`row=${row}`);
    if (matrix[row][cloumn] === target) {
        return true;
    }

    if (cloumns === 1) {
        return false;
    }
    cloumn = searchColumn(matrix, target, row, cloumns);

    if (matrix[row][cloumn] === target) {
        return true;
    }

    return false;
};

const searchRow = function (matrix, target, rows) {
    let i = 0;
    let j = rows - 1;
    while (j > i + 1) {
        let mid = Math.floor((i + j) / 2);
        console.log(`[searchRow] i=${i}, j=${j}, mid=${mid}`);
        if (matrix[mid][0] > target) {
            j = mid;
        } else if (matrix[mid][0] < target) {
            i = mid;
        } else {
            return mid;
        }
    }

    if (matrix[j][0] > target) {
        return i;
    } else {
        return j;
    }
}

const searchColumn = function (matrix, target, row, cloumns) {
    let i = 0;
    let j = cloumns - 1;

    while (j > i + 1) {
        let mid = Math.floor((i + j) / 2);
        console.log(`[searchColumn] i=${i}, j=${j}, mid=${mid}`);
        if (matrix[row][mid] > target) {
            j = mid;
        } else if (matrix[row][mid] < target) {
            i = mid;
        } else {
            return mid;
        }

        console.log(`[searchColumn] i=${i}, j=${j}, mid=${mid}`);
    }

    if (matrix[row][j] > target) {
        return i;
    } else {
        return j;
    }
}

var searchMatrix2 = function (matrix, target) {
    const rows = matrix.length;
    const cloumns = rows > 0 ? matrix[0].length : 0;
    let i = 0, j = rows * cloumns - 1;
    if (rows == 0 && columns == 0) {
        return false;
    }

    console.log(`[searchMatrix2] rows=${rows}, cloumns=${cloumns}`);
    while (j > i + 1) {
        let mid = Math.floor((i + j) / 2);
        console.log(`[searchMatrix2] i=${i}, j=${j}, mid=${mid}`);
        if (matrixVal(matrix, rows, cloumns, mid) < target) {
            i = mid;
        } else if (matrixVal(matrix, rows, cloumns, mid) > target) {
            j = mid;
        } else {
            return true;
        }
    }

    console.log(`[searchMatrix2] end i=${i}, j=${j}`);
    if (matrixVal(matrix, rows, cloumns, i) === target) {
        return true;
    }

    if (matrixVal(matrix, rows, cloumns, j) === target) {
        return true;
    }

    return false;
};

const matrixVal = function (matrix, rows, columns, index) {
    let row = rows === 1 ? 0 : Math.floor(index / columns);
    let cloumn = index % columns;
    console.log(`row=${row}, column=${cloumn}`);
    console.log(`[matrixVal] index: ${index}, matrix[${row}][${cloumn}] = ${matrix[row][cloumn]}`);
    return matrix[row][cloumn];
}

const m = [
    [1]
];

const t = 1;

console.log(searchMatrix2(m, t));