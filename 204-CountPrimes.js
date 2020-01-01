/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    const primes = [2];
    let num = 1;
    if (n == 0 || n == 1 || n == 2) {
        return 0;
    }

    if (n == 3) {
        return 1;
    }

    let nextPow = 4;
    let sqrt = 1;
    for (let i = 3; i < n; i += 2) {
        if (i >= nextPow) {
            sqrt = Math.floor(Math.sqrt(i));
            nextPow = (sqrt + 1) * (sqrt + 1);
        }

        let isPrime = true;
        for (let j = 1; j < primes.length; j++) {
            if(primes[j] > sqrt) {
                break;
            }
            //console.log(`${i}%${primes[j]}=${i % primes[j]}`);
            if (i % primes[j] === 0) {
                isPrime = false;
                //console.log(`${i}%${primes[j]} is 0...`);
                break;
            }
        }

        if (isPrime) {
            primes.push(i);
            num++;
        }
    }

    return num;
};

console.log(countPrimes(10000000));