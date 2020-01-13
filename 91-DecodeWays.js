const Log = require('./util/log');
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    const result = [];
    if (s.length == 0) {
        return 1;
    }
    result[0] = decode(parseInt(s.substring(0, 1)), 1);
    console.log(`result[0]=${result[0]}`);
    result[1] = decode(parseInt(s.substring(0, 2)), 2, 0);
    console.log(`result[1]=${result[1]}`);
    for (let i = 2; i < s.length; i++) {
        const num1 = parseInt(s.substring(i, i + 1));
        const decode1 = decode(num1, 1);
        const numRes1 = decode1 * result[i - 1];
        console.log(`decode1=${decode1}, numRes1=${numRes1}`);

        const num2 = parseInt(s.substring(i - 1, i + 1));
        if (num2 == 0) {
            return 0;
        }
        const decode2 = decode(num2, 2, 1);
        const numRes2 = decode2 * result[i - 2];
        console.log(`decode2=${decode2} numRes2=${numRes2}`);
        //const dup = (numRes1 > 0) && (numRes2 > 0) ? 1 : 0
        //console.log(`dup=${dup}`);
        result[i] = numRes1 + numRes2;// - dup;
        console.log(`result[${i}]=${result[i]}`);
    }

    return result[s.length - 1];
};

const decode = (num, length, type) => {
    console.log(`decode ${num}`);
    if (length == 1) {
        return num == 0 ? 0 : 1;
    } else if (length == 2 && type == 0) {
        if (num < 10 || (num > 20 && num % 10 == 0)) {
            return 0;
        } else if (num > 26 || num == 20 || num == 10) {
            return 1;
        } else {
            return 2;
        }
    } else if (length == 2 && type == 1) {
        if (num < 10 || num > 26) {
            return 0;
        } else {
            return 1;
        }
    }
}

console.log(`result is ${numDecodings('901')}`);