/* Find First and Last Position of Element in Sorted Array 
(https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.


Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]

Constraints:

-> 0 <= nums.length <= 10^5
-> -10^9 <= nums[i] <= 10^9
-> nums is a non-decreasing array.
-> -10^9 <= target <= 10^9
*/


//Nice question
var searchRange = function(nums, target) {
        let ans = [-1,-1];
        ans[0] = search(nums, target, true);
        if(ans[0]!==-1){
           ans[1] = search(nums, target, false);
           }
        return ans;

    }

var search = function(nums, target, findStartIndex){
    let ans = -1;

    let start = 0;
    let end = nums.length - 1;

    while(start <= end){
        let mid = Math.floor(start + (end - start)/2);

        if(target < nums[mid]){
            end = mid -1;}
        else if(target > nums[mid]){
            start = mid + 1;
        }
        else{
            //potential answer found
            ans = mid;
            if(findStartIndex){
                end = mid - 1;
            }
            else{
                start = mid + 1;
            }
        }
    }
    return ans;
};  
