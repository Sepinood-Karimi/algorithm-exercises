/** 
Multiple Pointers - isSubsequence
Write a function called is Subsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:
isSubsequence('hello', 'hello world'); // true 
isSubsequence('sing', 'sting'); // true 
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)
Space Complexity - 0(1)

**/

const isSubsequence = (string1,string2) => {
  let pointer1=0;
  let pointer2=0;
  while(pointer2<string2.length){
      if(pointer1<string1.length && string1[pointer1]===string2[pointer2]){
          pointer1++;
      }
      pointer2++;
  }
  return pointer1===string1.length;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
console.log(isSubsequence('also','I want to also be sure about the middle texts'));
