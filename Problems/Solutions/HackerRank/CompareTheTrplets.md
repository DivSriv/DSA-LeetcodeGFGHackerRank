## Compare the Triplets
[ Compare the Triplets ](https://www.hackerrank.com/challenges/compare-the-triplets/problem)

![image](https://user-images.githubusercontent.com/72649014/162387580-e04548d0-4ae1-4e6b-8f10-ffcfa9a2db87.png)


Solution:
```js
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    // Write your code here
    
    let al =0
    let bo =0

    for(let i=0; i<a.length; i++){
        if(a[i]==b[i]){
           continue; 
        }
        if(a[i]>b[i]){
            al++
        }
        if(a[i]<b[i]){
            bo++
        }
    }
    
    return [al,bo]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}


```
