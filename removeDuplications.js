//https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/

/**
 * @param {number[]} nums
 * @return {number}s
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let j = 0;
    for (let i = 0, l = nums.length; i < l; ++i) {
        if (nums[j] !== nums[i]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j+1;
};


const result = removeDuplicates([1,1,2,2,3]);
console.log(result);
