/* Move Zeroes(https://leetcode.com/problems/move-zeroes/)

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:

->  1 <= nums.length <= 10^4
->  -2^31 <= nums[i] <= 2^31 - 1
*/


var moveZeroes = function(nums) {
        
    //Simple solution
    
    //    for(let i = 0; i < nums.length; i++){
    //         if(nums[i]==0){
    //             for(let j = i+1; j < nums.length; j++){
    //                 if(nums[j]!==0){
    //                     [nums[i],nums[j]]=[nums[j],nums[i]]
    //                     break;
    //                 }
    //             }
    //         }
    //    }
    // return nums;
    
        
    //My JS specific solution
    let start =0
    let end = nums.length-1
    
    while(start<end){
        if(nums[start]==0){
            nums.splice(start,1)
            nums.push(0)
            end--
        }
        else{
            start++
        }
    }
    return nums
};
