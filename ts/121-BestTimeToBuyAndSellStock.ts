/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices: number[]): number {
    let min: number = undefined;
    let cur: number = 0;
    for (let i = 0; i < prices.length; i++) {
        if (min === undefined || prices[i] < minexit) {
            min = prices[i];
            continue;
        } 
        if (prices[i] - min > cur) {
            cur = prices[i] - min;
        }
    }
    return cur;
};

const arr: number[] = [7, 1, 5, 3, 6, 4];
console.log(`${arr} => ${maxProfit(arr)}`);