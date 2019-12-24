/**
 * @param {number} n
 * @return {number}
 */
function climbStairs1(n: number): number {
    let steps = [1, 2];

    for (let i = 2; i < n; i++) {
        steps[i] = steps[i - 1] + steps[i - 2];
    }

    return steps[n - 1];
};

console.log(`${climbStairs1(10)}`);
