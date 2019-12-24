/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let steps = [1, 2];
    
    for(let i=2; i<n; i++) {
        steps[i] = steps[i-1] + steps[i-2];
    }
    
    return steps[n-1];
};

console.log(`${climbStairs(10)}`);
