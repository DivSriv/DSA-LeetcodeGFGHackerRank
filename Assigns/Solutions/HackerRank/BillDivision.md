## Bill Division
[ Bill Division ](https://www.hackerrank.com/challenges/bon-appetit/problem)

![image](https://user-images.githubusercontent.com/72649014/162581570-4689edaf-d5f1-4e5b-b131-c653c66ec95e.png)



Solution:
```js

'use strict';

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
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
    // Write your code here
    let sum=0
    
    for(let i=0;i<bill.length;i++){
        sum+=bill[i]
    }
    let pay=(sum-bill[k])/2

    if(pay!==b){
        console.log(b-pay) 
    }
    else{
         console.log("Bon Appetit")
    }
   
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));

    const b = parseInt(readLine().trim(), 10);

    bonAppetit(bill, k, b);
}


```