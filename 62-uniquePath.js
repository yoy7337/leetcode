/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m == 1 || n == 1) {
        return 1;
    }
    
    const dp = create2DArray(m);

    dp[m - 1][n - 1] = 0;
    dp[m - 2][n - 1] = 1;
    dp[m - 1][n - 2] = 1;
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (dp[i][j] !== undefined) {
                continue;
            } else {
                dp[i][j] = 0;
            }

            if (i + 1 > m - 1 || j + 1 > n - 1) {
                dp[i][j] = 1;
                continue;
            }
            
            dp[i][j] += dp[i + 1][j];
            dp[i][j] += dp[i][j + 1];
        }
    }

    return dp[0][0];
};

function create2DArray(rows) {
    var arr = [];

    for (var i = 0; i < rows; i++) {
        arr[i] = [];
    }

    return arr;
}

console.log(`uniquePaths: ${uniquePaths(51,9)}`);