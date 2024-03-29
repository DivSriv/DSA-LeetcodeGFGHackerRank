/*N meetings in one room(https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1)

There is one meeting room in a firm. There are N meetings in the form of (start[i], end[i]) where start[i] is start time of meeting i and end[i] is finish time of meeting i.
What is the maximum number of meetings that can be accommodated in the meeting room when only one meeting can be held in the meeting room at a particular time?

Note: Start time of one chosen meeting can't be equal to the end time of the other chosen meeting.


Example 1:

Input:
N = 6
start[] = {1,3,0,5,8,5}
end[] =  {2,4,6,7,9,9}
Output: 
4
Explanation:
Maximum four meetings can be held with
given start and end timings.
The meetings are - (1, 2),(3, 4), (5,7) and (8,9)
Example 2:

Input:
N = 3
start[] = {10, 12, 20}
end[] = {20, 25, 30}
Output: 
1
Explanation:
Only one meetings can be held
with given start and end timings.

Your Task :
You don't need to read inputs or print anything. Complete the function maxMeetings() that takes two arrays start[] and end[] along with their size N as input parameters and returns the maximum number of meetings that can be held in the meeting room.


Expected Time Complexity : O(N*LogN)
Expected Auxilliary Space : O(N)


Constraints:
1 ≤ N ≤ 10^5
0 ≤ start[i] < end[i] ≤ 10^5
*/


//User function Template for javascript

/**
 * @param {number[]} start
 * @param {number[]} end
 * @param {number} n
 * @returns {number}
*/

class Solution 
{
    //Function to find the maximum number of meetings that can
    //be performed in a meeting room.
    maxMeetings(start, end, n)
    {
        // code here
        let result = []
        
        for(let i=0;i<n;i++){
            result.push([start[i],end[i],i+1])
        }
        
        result.sort(function(a,b){
            if(a[1]==b[1]){
                return a[2]-b[2]
            }
            else{
                return a[1]-b[1]
            }
        })
        
        let ans = []
        ans.push(result[0])
        let lastMeetEndTime = result[0][1]
        
        for(let i=1;i<n;i++){
            if(result[i][0]>lastMeetEndTime){
                ans.push(result[i])
                lastMeetEndTime = result[i][1]
            }
        }
        
        return ans.length
        
    }
}


//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let start = new Array(n);
        let end = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            start[i] = input_ar1[i];
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            end[i] = input_ar2[i];
        let obj = new Solution();
        console.log(obj.maxMeetings(start, end, n));
    }
}
// } Driver Code Ends
