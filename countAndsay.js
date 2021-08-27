/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1){
        return "1";
    }

    const term = Number(countAndSay(n-1));
    const digit = Math.floor(term).toString().length;
    let result = "";

    let count = {};

    let i =0;
    while(i< digit) {
        const key = Math.floor(term / Math.pow(10, digit-i-1));

        if(count[key]) {
            count[key] +=1;
        } else {
            count[key] = 1;
            result += count[key].toString() + key.toString();
            count = {};
        }
        ++i;
    }
    return result;
};

console.log(countAndSay(4));