/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let left = 0;
    let right = 0;

    for (; right < nums.length; right++) {
        if (nums[right] != 0) {
            switch2(left, right, nums);
            left++;
        }
    }

    for (; left < nums.length; left++) {
        nums[left] = 0;
    }
};

const switch2 = (i, j, nums) => {
    if (i == j) return;
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}


nums = [0, 1, 0, 3, 12];
console.log(`before: ${nums}`);
moveZeroes(nums);
console.log(`after: ${nums}`);