## Sparse Arrays
[ Sparse Arrays ](https://www.hackerrank.com/challenges/sparse-arrays/problem)

![image](https://user-images.githubusercontent.com/72649014/163767843-79bcad9c-9d4d-471d-a932-e1c8ccf0d457.png)


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
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    // Write your code here
    let arr = []
    
    for(let i=0; i < queries.length; i++){
        arr.push(0)
    }
    for(let i=0; i<queries.length; i++){
        for(let j=0; j < strings.length; j++){
            if(queries[i]==strings[j]){
               arr[i]= arr[i]+1
            }
        }
    }
    //console.log(arr)
    return arr
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stringsCount = parseInt(readLine().trim(), 10);

    let strings = [];

    for (let i = 0; i < stringsCount; i++) {
        const stringsItem = readLine();
        strings.push(stringsItem);
    }

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    const res = matchingStrings(strings, queries);

    ws.write(res.join('\n') + '\n');

    ws.end();
}


```
