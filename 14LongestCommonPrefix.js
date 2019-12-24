/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs === undefined || strs.length === 0) {
        return "";
    }

    let lcp = strs[0];
    
    for(let i=1; i < strs.length; i++) {
        var str = strs[i];
        console.log(`[outer] lcp=${lcp}, str=${str}`);
        while(true) {
        	console.log(`[inner] lcp=${lcp}`);
            if(lcp.length > str.length) {
                lcp = lcp.substring(0, str.length);
                console.log(`[case1] lcp=${lcp}`);
            }
            
            if(str.substring(0, lcp.length) !== lcp) {
                if(lcp.length == 1) {
                	console.log(`[case2] lcp=${lcp}`);
                    return "";
                }

                console.log(`[case3] lcp=${lcp}`);
                lcp = lcp.substring(0, lcp.length -1);
            } else {
				console.log(`[case4] lcp=${lcp}`);
                break;
            }
        }
    }
    
    return lcp;
};

console.log(`result=${longestCommonPrefix(["dog","racecar","car"])}`);