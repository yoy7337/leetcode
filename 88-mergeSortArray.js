/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    console.log(`s: nums1: ${nums1}, i: ${i}, nums2: ${nums2}, j: ${j}`);

    while (j >= 0) {
        if (nums1[i] >= nums2[j]) {
            swap2(nums1, i, nums1, k);
            k--;i--;
            console.log('k--, i--');
        } else {
            swap2(nums2, j, nums1, k);
            k--; j--;
            console.log('k--, j--');
        }
        console.log(`e: nums1: ${nums1}, i: ${i}, nums2: ${nums2}, j: ${j}`);
    }
};

const swap2 = (nums1, i, nums2, j) => {
    const temp = nums1[i];
    nums1[i] = nums2[j];
    nums2[j] = temp;
}

const main = () => {
    const nums1 = [12,22,33,0,0,0];
    const nums2 = [2,5,6];
    const m = 3, n = 3;

    console.log(`nums1: ${nums1}, m: ${m}, nums2: ${nums2}, n: ${n}`);
    merge(nums1, m, nums2, n);
    console.log(`merged: ${nums1}`);
}

main();