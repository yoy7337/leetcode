/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = (nums) => {
    let results = [];
    nums.sort(compareFunction);
    console.log(`nums: ${nums}`);
    for(let i = 0; i < nums.length - 2; i++) {
        console.log(`i: ${i}`);
        // if(i!= 0 && nums[i] == nums[i-1]) {
        //         i++;
        //         continue;
        // }

        let val = nums[i];
        let p1 = i + 1;
        let p2 = nums.length - 1;

        let prevP1;
        let prevP2;

        while(true) {
            console.log(`S: i:${i} p1: ${p1}, p2: ${p2}`);
            if(p1 >= p2) {
                break;
            }
           
            if(prevP1 && nums[prevP1] === nums[p1]) {
                p1++;
                continue;
            }
            if(prevP2 && nums[prevP2] === nums[p2]) {
                p2 --;
                continue;
            }


            let sum = nums[p1] + nums[p2] + val;
            
            if(sum == 0 && !containSomeSet( results, [val, nums[p1], nums[p2]] )) {
                results.push([val, nums[p1], nums[p2]]);
                p1++;
                p2--;
                prevP1 = p1;
                prevP2 = p2;
                console.log(`match...`);
            } else if (sum < 0) {
                prevP1 = p1;
                p1++;
            } else {
                prevP2 = p2;
                p2--;
            }

            console.log(`E: i:${i} p1: ${p1}, p2: ${p2}`);           
        }

    }
    
    return results;
};

const compareFunction = (a, b) => {
    if(a < b) {
        return -1;
    }
    
    if(a > b) {
        return 1;
    }
    
    if(a == b) {
        return 0;
    }
}

const containSomeSet = (allArray, array) => {
    for(let i=0; i<allArray.length; i++) {
        if(array[0] === allArray[i][0] && array[1] === allArray[i][1] && array[2] === allArray[i][2]) {
            return true;
        }
    }

    return false;
}

console.log(threeSum([-1, -1,0,0,1,1]));

console.log(threeSum([-1,0,1,2,-1,-4]));