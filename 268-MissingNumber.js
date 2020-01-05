/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let result = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        result += i + 1 - nums[i];
    }

    return result;
};

var missingNumberV1 = (nums) => {
    const arr = new Array(nums.length + 1);
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        arr[num] = true;
    }

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== true) {
            return j;
        }
    }
}

console.log(`missingNumber: ${
    missingNumber([0])
    }`);