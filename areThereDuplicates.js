/**
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
Examples:
areThereDuplicates(1, 2, 3) // false areThereDuplicates(1, 2, 2) // true areThereDuplicates('a', 'b', 'c', 'a') // true

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
**/


/**
 Frequency Counter
    Time - O(n)
    Space - O(n)
**/
// const areThereDuplicates = (...arguments) =>{
//     let frequencyCounter = {};
//     for(let val of arguments){
//         if (frequencyCounter[val]){
//             return true;
//         }
//         frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
//     }
//     return false;
// }

/**
 Frequency Counter
 Time - O(n log n)
 Space - O(n)
 **/
// const areThereDuplicates = (...arguments) =>{
//     arguments.sort((a, b) => (a > b ? 1 : -1));
//     let frequencyCounter = {};
//     for(let val of arguments){
//         if (frequencyCounter[val]){
//             return true;
//         }
//         frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
//     }
//     return false;
// }

/**
 Time - O(n log n)
 Space - O(1)
 **/
// const areThereDuplicates = (...arguments) =>{
//     arguments.sort((a, b) => (a > b ? 1 : -1));
//     for (let i=0;i<arguments.length-1;i++){
//         if (arguments[i]===arguments[i+1]){
//             return true;
//         }
//     }
//     return false;
// }


/**
 multiple pointers
 Time - O(n log n)
 Space - O(1)
 **/
const areThereDuplicates = (...arguments) =>{
    arguments.sort((a, b) => (a > b ? 1 : -1));
    let left=0;
    let right = left+1;
    while(right<arguments.length){
        if (arguments[left]===arguments[right]){
            return true;
        }
        left++;
        right++;
    }
    return false;
}



console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
console.log(areThereDuplicates('a','a','4','6','7','7'))
console.log(areThereDuplicates('a','b','4',4,7,8)) // I have to ask about this from mentors in frequency counter way