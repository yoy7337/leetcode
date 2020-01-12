/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let row, column;
let find = false;
var searchMatrix = function (matrix, target) {
    row = matrix.length;
    column = matrix[0].length;
    search2(matrix, target, 0, column - 1);

    return find;
};

const search = (matrix, target, i, j) => {
    if (i >= row || j >= column || matrix[i][j] == undefined) {
        return;
    }

    if (matrix[i][j] === target) {
        find = true;
        return;
    }

    matrix[i][j] = undefined;

    if (matrix[i][j] < target) {
        search(matrix, target, i + 1, j);
        search(matrix, target, i, j + 1);
    }
}

const search2 = (matrix, target, i, j) => {
    console.log(`i: ${i}, j: ${j}`);
    if (find == true || i >= row || j >= column || i < 0 || j < 0) {
        return;
    }

    console.log(`matrix[${i}][${j}]=${matrix[i][j]}`);
    if (matrix[i][j] === target) {
        find = true;
        return;
    }

    if (matrix[i][j] > target) {
        search2(matrix, target, i, j - 1);
    } else {
        search2(matrix, target, i + 1, j);
    }
}

const matrix = [
    [93, 157, 226, 308, 365, 384, 479, 539, 557, 652],
    [118, 234, 287, 368, 395, 432, 480, 607, 634, 723],
    [132, 263, 381, 453, 525, 533, 577, 650, 707, 800],
    [171, 307, 473, 504, 526, 596, 643, 719, 776, 842],
    [233, 319, 514, 571, 668, 710, 733, 777, 875, 886],
    [318, 362, 555, 605, 717, 782, 809, 884, 889, 940],
    [349, 415, 622, 708, 787, 795, 824, 921, 957, 1014],
    [414, 420, 656, 789, 813, 898, 954, 1052, 1095, 1175],
    [430, 477, 705, 863, 961, 991, 1003, 1121, 1190, 1236],
    [524, 611, 793, 868, 1027, 1111, 1112, 1123, 1252, 1253]
];

const result = searchMatrix(matrix, 1252);
console.log(result);