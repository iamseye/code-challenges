/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    const len = arr.length;
    if (len === 1) {
        return arr[0];
    }
    let sum = 0;

   // const n = 2;

    for(let n =1; n<=len; n+=2) {
        for (let i = 0; i < len - n + 1; i++) {
            for (let j = i; j < n + i; j++) {
                sum += arr[j];
            }
        }
    }

    return sum;
};

// const array = [1,4,2,5,3];



console.log(sumOddLengthSubarrays(array));

