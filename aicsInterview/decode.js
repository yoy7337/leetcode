const decode = (str) => {
    const result = [];
    result[0] = 1;
    result[1] = cal(str.substring(0, 2));
    for (let i = 2; i < str.length; i++) {
        // cal(str.substring(i, i+1));
        // cal(str.substring(i-1, i+1));
         result[i] = 
         cal(str.substring(i, i + 1)) + result[i - 1] +
             cal(str.substring(i-1, i + 1)) + result[i - 2];
        console.log(`result[${i}] = ${result[i]}`);
    }

    return result[str.length - 1];
};

const cal = (str) => {
    console.log(`cal ${str}`);
    let input = str;
    let remain = str.length;
    if (remain == 1) {
        return 1;
    }
    if (remain == 2) {
        const num = parseInt(input);
        if (num <= 26 && num > 10) {
            return 3;
        } else if (num <= 26 && num <= 10) {
            return 1;
        } else {
            return 2;
        }
    }
}

const input = '226';
console.log(decode(input));