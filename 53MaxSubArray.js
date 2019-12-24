/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = nums[0];
    let prev = 0;
    
    for(let i=0; i< nums.length; i++) {
        let num = nums[i];
		console.log(`num=${num}`);
        //1. prev < 0
        // prev = num
        // result = max([prev, result])
        // 2.prev > 0
        // prev = prev + num
        // result = Math.max([prev, result])
        if(prev < 0)  {
            prev = num;
            result = Math.max([prev, result]);

			console.log(`1: result=${result}, prev=${prev}`);
        } else {
            prev = prev + num;
            result = Math.max([prev, result]);
			
			console.log(`2: result=${result}, prev=${prev}`);
        }
    }
    
    return result;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
