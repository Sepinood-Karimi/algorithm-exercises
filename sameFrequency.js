/**
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)

Sample Input:
sameFrequency (182, 281) // true 
sameFrequency (34,14) // false 
sameFrequency (3589578, 5879385) // true 
sameFrequency (22,222) // false
**/

const sameFrequency = (number1,number2) =>{
    if (number1<0 || number2<0) return "enter positive int";
    const stringNumber1 = number1.toString();
    const stringNumber2 = number2.toString();
    if (stringNumber1.length!==stringNumber2.length) return false;

    const frequencyCounter1 = {};
    for (let number of stringNumber1){
        frequencyCounter1[number] = (frequencyCounter1[number] || 0) + 1;
    }
    const frequencyCounter2 = {};
    for (let number of stringNumber2){
        frequencyCounter2[number] = (frequencyCounter2[number] || 0) + 1;
    }
    for (let count in frequencyCounter1) {
        if (frequencyCounter1[count] !== frequencyCounter2[count]) return false;
    }
    return true;
}

console.log(sameFrequency(6374,-6374));
console.log(sameFrequency(-6374,-6374));
console.log(sameFrequency(-6374,6374));
console.log(sameFrequency (22,222));
console.log(sameFrequency (182, 281));
console.log(sameFrequency (34,14));
console.log(sameFrequency (3589578, 5879385));

