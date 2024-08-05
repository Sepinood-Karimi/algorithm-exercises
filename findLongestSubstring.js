/** 
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6]
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8|
findLongestSubstring('thisishowwedoit') // 6

Time Complexity - O(n)
**/

const findLongestSubstring = (string) => {
    let maxLength = 0;
    let startWindowIndex = 0;
    let charIndexMap = {};

    for (let endPointer = 0; endPointer < string.length; endPointer++) {
        let char = string[endPointer];
        if (charIndexMap[char] !== undefined && charIndexMap[char] >= startWindowIndex) {
            startWindowIndex = charIndexMap[char] + 1;
        }
        charIndexMap[char] = endPointer;
        maxLength = Math.max(maxLength, endPointer - startWindowIndex + 1);
    }

    return maxLength;
}

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool') );
console.log(findLongestSubstring('thisisawesome') );
console.log(findLongestSubstring('thecatinthehat') );
console.log(findLongestSubstring('bbbbbb') );
console.log(findLongestSubstring('longestsubstring') );
console.log(findLongestSubstring('thisishowwedoit') );