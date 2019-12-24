/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function (nums) {
    let prev = undefined;
    let index = 0;

    while(index < nums.length) {
        const num = nums[index];
        console.log(`nums=${nums}, prev=${prev}, index=${index}`);
        if(prev === num) {
            nums.splice(index, 1);
        } else {
            index++;
            prev = num;
        }
        console.log(`nums=${nums}, prev=${prev}, index=${index}`);
    }

    return nums;
};

var removeDuplicates = function (nums) {
    if (!nums || nums.length == 1) {
        return;
    }

    let index = 0;

    while(index < nums.length) {
        index ++;
        let prev = nums[index-1];
        console.log(`Start: nums=${nums}, prev=${prev}, index=${index}`);
        let removeItems = 0;
        for (let i = index; i < nums.length; i++) {
            const num = nums[i];
            console.log(`num=${num}`);
            if(prev === num) {
                console.log(`removeItems++`);
                removeItems ++
            } else {
                break;
            }
        }

        if(removeItems > 0) {
            nums.splice(index, removeItems);
        }

        console.log(`End: nums=${nums}, prev=${prev}, index=${index}`);
    }

    return nums;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2]));