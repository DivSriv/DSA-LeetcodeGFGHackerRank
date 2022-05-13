/* Find All Duplicates in an Array(https://leetcode.com/problems/find-all-duplicates-in-an-array/)

Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.


Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]

Example 2:
Input: nums = [1,1,2]
Output: [1]

Example 3:
Input: nums = [1]
Output: []

Constraints:
-> n == nums.length
-> 1 <= n <= 10^5
-> 1 <= nums[i] <= n
-> Each element in nums appears once or twice.
*/


var findDuplicates = function(nums) {
    let i = 0;
    while(i<nums.length){
        let correct = nums[i]-1;
        if(nums[i]!==nums[correct]){
            [nums[i],nums[correct]] = [nums[correct],nums[i]];
        }  
    
        else{
            i++;
        }
    }
    let arr =[];
    for(let index=0; index <nums.length; index++){
        if(nums[index] != index+1){
          arr.push(nums[index]);  
        }
    }
    return arr;  
};

