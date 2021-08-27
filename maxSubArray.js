/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    let maxSum = nums[0];
    let maxSubArray = [nums[0]];

    for (let i = 0 ; i<nums.length ; ++i) {
        if (nums[i] >= maxSum ) {
            maxSum = nums[i];
            maxSubArray = [nums[i]];
        }
        let sum = nums[i];
        for (let j = i + 1; j < nums.length; ++j) {
                sum += nums[j];
                if (sum > maxSum) {
                    maxSum = sum ;
                    maxSubArray=nums.slice(i,j+1);
                }
            }
    }

    return maxSum;
};

console.log(maxSubArray([7,1,  -3,  4,-1,2,1,-5,4]))

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayImprove = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
}