// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0 || prices.length === 1) {
        return 0;
    }

    let profit = 0;
    let min = prices[0] ;

    for (let i = 0; i < prices.length; ++i) {
        const next = prices[i+1];
        const current = prices[i];
        if (current< next) {
            if(current < min) {
                min = current;
            }

            const thisProfit = next-current > next-min ? next-current : next-min
            if (thisProfit > profit) {
                profit = thisProfit
            }
        }
    }


    return profit;
};

console.log(maxProfit([7,1,5,3,6,4])) //5
// console.log(maxProfit([1,2,3,4,5]))
// console.log(maxProfit([7,6,4,3,1]))
// console.log(maxProfit([6,1,3,2,4,7]));
//console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([2,1,2,0,1])); //1
console.log(maxProfit([3,2,6,5,0,3])) //4
