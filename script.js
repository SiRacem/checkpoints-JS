/* String Manipulation Functions : */
function reverseString(str){
    let array = str.split('').reverse().join('');
    console.log(array);
}

reverseString("hello");
/***********************/
function lengthString(str){
    let array = str.split('');
    console.log(array.length);
}

lengthString("hello");
/***********************/
function upperCase(str){
    let array = str.split(' ');
    for(let i = 0; i < array.length; i++){
        let j = array[i];
        res = j[0].toUpperCase() + j.slice(1);
        console.log(res);
    }
}

upperCase("hello world");
/* Array Functions : */

function maxNumber(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max ){
            max = arr[i]
        }
    }
    console.log("The Number max in arr is :", +max);
}

maxNumber([1, 5, 2, 8, 3]);

function minNumber(arr){
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min ){
            min = arr[i]
        }
    }
    console.log("The Number min in arr is :", +min);
}

minNumber([1, 5, 2, 8, 3]);
/***********************/
let sum = 0;
    function sumNumber(arr){
        for(i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        console.log("The sum of arr is :", +sum);
}

sumNumber([1, 2, 3, 4, 5]);
/***********************/
let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);
/* Mathematical Functions : */
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));
/***********************/
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));
/***********************/
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}