/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    // for (let i =0; i<m+n;++i) {
    //     nums1[m+i] = nums2[i];
    // }
    //
    // nums1 = nums1.sort((a, b)=> a-b);

    let len = nums1.length - 1;
       m--;
       n--;

       while (n >= 0) {
           if (nums1[m] > nums2[n]) {
               nums1[len] = nums1[m];
               m--;
           } else {
               nums1[len] = nums2[n];
               n--;
           }
           len--

       }
       return nums1;
};


console.log(merge([1,2,3,0,0,0], 3,  [2,5,6], 3))

//
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
//
// 1,2,3    2,5,6
// 256