/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    var min = undefined;
    var cur = 0;
    for (var i = 0; i < prices.length; i++) {
        if (min === undefined || prices[i] < min) {
            min = prices[i];
            continue;
        }
        if (prices[i] - min > cur) {
            cur = prices[i] - min;
        }
    }
    return cur;
}
;
var arr = [7, 1, 5, 3, 6, 4];
console.log(arr + " => " + maxProfit(arr));
