/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let result = 0;
    const charMap = {};

    for (let i = 0; i < chars.length; i++) {
        charMap[chars.charAt(i)] = charMap[chars.charAt(i)] ? charMap[chars.charAt(i)] + 1 : 1;
    }

    for (let word of words) {
        const wMap = {};
        for (let i = 0; i < word.length; i++) {
            wMap[word.charAt(i)] = wMap[word.charAt(i)] ? wMap[word.charAt(i)] + 1 : 1;
        }

        const keys = Object.keys(wMap);
        console.log(`wMap=${JSON.stringify(wMap)}, keys=${keys}`);
        let isFormeByChars = true;

        for (let x of keys) {
            console.log(`x=${x}`);
            if (!charMap[x] || charMap[x] < wMap[x]) {
                isFormeByChars = false;
                break;
            }
        }

        if (isFormeByChars) {
            result += word.length;
        }
    }

    return result;
};

const words = ["cat", "bt", "hat", "tree"];
const chars = "attach";
console.log(`words=${words}, chars=${chars}, result=${countCharacters(words, chars)}`)