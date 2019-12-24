/**
 * @param {number} n
 * @return {number}
 */
function climbStairs1(n) {
    var steps = [1, 2];
    for (var i = 2; i < n; i++) {
        steps[i] = steps[i - 1] + steps[i - 2];
    }
    return steps[n - 1];
}
;
console.log("" + climbStairs1(10));
