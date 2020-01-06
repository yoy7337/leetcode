/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {

    };
};

const size = 1;
const badVer = 1;
const isBadVersionDef = (num) => {
    return num >= badVer;
}

const sulotion = (size) => {
    let l = 0;
    let r = size;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        console.log(`l=${l}, r=${r}, mid=${mid}`);
        const findBad = isBadVersionDef(mid);
        if (l === mid && !findBad) {
            return r;
        }

        if (findBad) {
            r = mid;
        } else {
            l = mid;
        }
    }

    return l;
}

console.log(sulotion(size));