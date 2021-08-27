/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if ( nums.length > 1 && k !== 0 ) {
        const rotated = [];
        const len = nums.length;
        for( let i = len-k ; i <= len+k ; ++i) {
            const index = i >= len ? i-len : i;
            rotated.push(nums[index]);
        }

        for (let i = 0; i < nums.length; ++i) {
          nums[i] = rotated[i];
        }
    }

    console.log(JSON.stringify(nums));
};


var rotate2 = function(nums, k) {
    if ( nums.length > 1 && k !== 0 ) {
        const rotated = [];
        const changing_index = Math.abs(nums.length-k);

        for (let i = changing_index; i<nums.length; i++) {
            rotated.push(nums[i]);
        }

        for (let i = 0; i<changing_index; i++) {
            rotated.push(nums[i]);
        }
        nums = [...rotated];
    }

    console.log(JSON.stringify(nums));
};

var rotate3 = function(nums, k) {
  const numsAux = Array.from(nums);
  const length = numsAux.length;
  for (let i = 0; i < length; i++) {
    nums[(i + k) % length] = numsAux[i]
  }
};

rotate2([1,2,3,4,5,6,7],3);