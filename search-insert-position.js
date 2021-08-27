/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    if (target <= nums[0]) {
        return 0;
    }

    const l = nums.length;

    if(target > nums[l-1]) {
        return l;
    }


    for (let i=0; i<l; ++i) {
        if ( nums[i] >= target) {
            return i;
        }
    }
};

console.log(searchInsert([1,3,5,6],1));