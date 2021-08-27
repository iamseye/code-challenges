/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

    if (nums.length === 1) {
        return nums[0];
    }

    const min_num = Number.MIN_SAFE_INTEGER;
    let max = min_num;
    let second = min_num;
    let third = min_num;

    for(let i = 0; i<nums.length ; ++i){
        if (nums[i] > max) {
            third = second;
            second = max;
            max = nums[i];
        } else if (nums[i] < max && nums[i] > second) {
            third = second;
            second = nums[i];
        } else if (nums[i] < second && nums[i] > third) {
            third = nums[i];
        }
    }

    if (third === min_num) {
       return max;
    }

    return third;
};

console.log(thirdMax([1,-2147483648,2]));