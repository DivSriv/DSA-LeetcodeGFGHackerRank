## Day of the Programmer
[ Day of the Programmer ](https://www.hackerrank.com/challenges/day-of-the-programmer/problem)

![image](https://user-images.githubusercontent.com/72649014/162626448-9c189cc8-a827-4bb1-998a-cc9fd524dc63.png)


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
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
    // Write your code here
    
    if(year>=1919 && year<=2700){
        let date=12
        if(year%400==0||(year%4==0&&year%100!==0)){
           return (`${date}.09.${year}`) 
        }
        else{
            //date=13
            return (`${date+1}.09.${year}`)
        }
    }
    else if(year>=1700 && year<=1917){
        let date=12
        if(year%4==0){
           return (`${date}.09.${year}`) 
        }
        else{
            //date=13
            return (`${date+1}.09.${year}`)
        }
    }
    else if(year==1918){
        let date=12
        return (`${date+14}.09.${year}`)
    }
    else{
        return (-1)
    }
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    ws.write(result + '\n');

    ws.end();
}


```
