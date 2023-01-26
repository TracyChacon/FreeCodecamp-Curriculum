// # Intermediate Algorithm Scripting

const { drop } = require("lodash");

// Now that you know the basics of algorithmic thinking along with OOP and Functional Programming, test your skills with the Intermediate Algorithm Scripting challenges.








// ## Sum All Numbers in a Range #1

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, 'sumAll([4, 1])' should return '10' because sum of all the numbers between 1 and 4 (both inclusive) is '10'.

// function sumAll(arr) {
//     let amountOfNumbers = (Math.abs(arr[0] - arr[1]) + 1)
//     return amountOfNumbers/2 * (arr[0] + arr[1]);    
// };

// console.log(sumAll([1, 4]));
// console.log(sumAll([4, 1]));

// console.log(sumAll([5, 10]));
// console.log(sumAll([10, 5]));







// ## Diff Two Arrays #2

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the 'symmetric difference' of the two arrays.

// Note: You can return the array with its elements in any order.

// function diffArray(arr1, arr2) {

//     const newArr = arr1
//         .filter(element => !arr2.includes(element))
//         .concat(arr2.filter(element => !arr1.includes(element)))

//     const someArr = arr1
//         .filter(element => {
//             console.log(!arr2.includes(element))
//             return !arr2.includes(element)})
//         .concat(arr2.filter(element => {
//             return !arr1.includes(element)}));

//     const union = [...new Set([...arr1, ...arr2])]
//     console.log(union)

//     const intersection = arr1.filter(i => arr2.includes(i))
//     console.log(intersection)

//     const difference = union.filter(i => !intersection.includes(i))
//     console.log(difference)

//     return  newArr;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));






// ## Seek and Destroy #3

// You will be provided with an initial array (the first argument in the 'destroyer' function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments

// Note: You have to use the 'arguments' object.

// function destroyer(arr) {
//   // store additional function arguments in 
//   // variable 'removeArguments'
//   const removeArguments = Array.from(arguments).slice(1);
//   // return array without 'removeArguments' 'elements'
//   return arr.filter(element => !removeArguments.includes(element));
// }
  

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))








// ## Wherefore art thou #4

// Make a function that to look through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]', and  the second argument is '{ last: "Capulet" }' then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

// function whatIsInAName(collection, source) {
//   const souceKeys = Object.keys(source);
//   return collection.filter(obj => {
//     for (let i = 0; i < souceKeys.length; i++) {
//       if (!obj.hasOwnProperty(souceKeys[i]) ||
//           obj[souceKeys[i]] !== source[souceKeys[i]]) {
//         return false;
//       }
//     }
//     return true;
//   });
// }

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// should return [{ first: "Tybalt", last: "Capulet" }]

// console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) ) 
// should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]

// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) )
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].








// ##  Spinal Tap Case #5

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// function spinalCase(str) {
//   var regex = /\s+|_+/g;
 
//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
//   return str.replace(regex, "-").toLowerCase();
// }

// console.log(spinalCase('This Is Spinal Tap'));
// console.log(spinalCase('thisIsSpinalTap'));
// console.log(spinalCase('The_Andy_Griffith_Show'));
// console.log(spinalCase('Teletubbies say Eh-oh'));
// console.log(spinalCase('AllThe-small Things'));







// ## Pig Latin #6

// Pig Latin is a way of altering English Words. The rules are as follows:
// -If a word begins with a consonant, take the first consolnant or consonant cluster, move it to the end of th eword, and add 'ay' to it.

// -If a word begins with a vowel, just add 'way' at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

// function translatePigLatin(str) {
//     return str
//       .replace(/^[aeiou]\w*/g, "$&way")
//       .replace(/(^[^aeiou]+)(\w*)/g, "$2$1ay");
// }

// console.log(translatePigLatin("consonant crazy speech"));
// console.log(translatePigLatin("paragraphs"));
// console.log(translatePigLatin("glove"));
// console.log(translatePigLatin("schwartz"));






// ## Search and Replace #7

// Perfrom a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing(before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first in the original word when you are replacing it. For example if you mean to replace the word 'book' with the wrod 'dog', it should be replaced as 'Dog'

// function myReplace(str, before, after) {
//     const startingIndexOfBefore = str.toLowerCase().indexOf(before.toLowerCase());
//     const capitilizeFirstLetterAfter = after.toLowerCase().charAt(0).toUpperCase() + after.slice(1)
//     // handle case: first letter of string variable 'before' is lower case
//     if(str[startingIndexOfBefore] === before.toLowerCase()[0]) {
//         return str.replace(before, after.toLowerCase());
//     }
//     // handle case: first letter of string variable 'before' is upper case
//     return str.replace(before, capitilizeFirstLetterAfter);
// };

// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// console.log(myReplace("Let us go to the store", "store", "mall"));
// console.log(myReplace("I think we should look up there", "up", "Down"));






// ## DNA Pairing #8

// Pairs of DNA strands consist of necleobase pairs. Base pairs are represented by the characters AT and CG, which from building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// for example, for the input 'GCG', return '[["G", "C"], ["C", "G"], ["G", "C"]]'

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// function pairElement(str) {
//     const pairs = {
//         A: "T",
//         T: "A",
//         C: "G",
//         G: "C"
//       }
//       return str
//         .split("")
//         .map(necleobase => [necleobase, pairs[necleobase]]);
// }

// console.log(pairElement("GCG"));






// ## Missing letters #9

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return 'undefined'.

// function fearNotLetter(str) {
//     let maxCharCode = str.charCodeAt(0);
//     let minCharCode = str.charCodeAt(0);
//     for(let i = 0; i < str.length; i++) {
//         if(str.charCodeAt(i) > maxCharCode) maxCharCode = str.charCodeAt(i);
//         if(str.charCodeAt(i) < minCharCode) minCharCode = str.charCodeAt(i);
//     }
//     for(let i = minCharCode; i <= maxCharCode; i++) {
//         if(str.indexOf(String.fromCharCode(i)) === -1) return String.fromCharCode(i)
//     }
//     return undefined;
// }

// console.log(fearNotLetter('abce')); 






// ## Sorted Union #10

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array shold not be sorted in numerical order.

// Check the assertion tests for examples.

// function uniteUnique(arr) {
//     const outputArr = [arr[0]];
//     [...arguments].forEach(array => {
//         array.forEach(theNumber => {
//             if(!outputArr.includes(theNumber)) {
//                 outputArr.push(theNumber)
//             }
//         })
//     });
//     return outputArr;
// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
// console.log(uniteUnique([1, 2, 3], [5, 2, 1]))








// ## Convert HTML Entities #11

// Convert the characters '&', '<', '>','"' (double quote), and '''(apostrophe), in a string to their corresponding HTML entities.

// function convertHTML(str) {
//     const entities = {
//         '&': "&amp;",
//         '<': "&lt;",
//         '>': "&gt;",
//         '"': "&quot;",
//         "'": "&apos;"
//     }
//     // return str
//     //     .split("")
//     //     .map(thisEntity => entities.hasOwnProperty(thisEntity) 
//     //         ? entities[thisEntity] 
//     //         : thisEntity)
//     //     .join('')

//     // return str
//     // .split("")
//     // .map(entity => htmlEntities[entity] || entity)
//     // .join("");
//     return str.replace(/([&<>\"'])/g, match => entities[match]);
// }

// console.log(convertHTML("Dolce & Gabbana"));
// console.log(convertHTML("Hamburgers < Pizza < Tacos"));
// console.log(convertHTML("Sixty > twelve"));
// console.log(convertHTML('Stuff in "quotation marks"'));
// console.log(convertHTML("Schindler's List"));
// console.log(convertHTML("<>"));
// console.log(convertHTML("abc"));





// ## Sum All Odd Fibonacci Numbers #12

// Given a positive integer 'num', return the sum of all odd Fibonacci numbers that are less than or equal to 'num'.

// The first two numbers in the Fionacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5, and 8.

// for example, 'sumFibs(10)' should return '10' because all odd Fibonacci numbers less than or equal to '10' are 1, 1, 3, and 5.

// function sumFibs(num) {
//     let prevNum = 0;
//     let nextNum = 1;
//     let fibOddNumSum = 0
//     // use for loop to iterate over fibonacci numbers
//     for(let fibTerm = 0; fibTerm <= num; fibTerm = prevNum + nextNum) {
//         // sum odd numbers of the sequence and store in 'fibOddNumSum' variable
//         if(fibTerm % 2 === 1) fibOddNumSum += fibTerm;
//         // move to next terms in the sequence
//         prevNum = nextNum;
//         nextNum = fibTerm;
//     }
//     return fibOddNumSum;
// };

// console.log(sumFibs(10));







// ## Sum All Primes #13

// A prime number is a whole number greater than 1 with exactly tow divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2, and 4.

// Rewrite 'sumPrimes' so it returns the sum of all prime numbers that are less than or equal to num.

// function sumPrimes(num) {
// // Check all numbers for primality
//   let primes = [];
//   for (let i = 2; i <= num; i++) {
//     if (primes.every((prime) => i % prime !== 0)) {
//         primes.push(i);
//     }
//   }
//   return primes.reduce((sum, prime) => sum + prime, 0);
//     // console.log(6 * 163 - 1)

    // let sum = 0;
    // let equation1 = 0;
    // let equation2 = 0;
    // console.log( 6 * 139 - 1)
    // for(let i = 1; i <= num; i++) {
    //     if(6 * i - 1 <= num) {
    //         console.log((6 * i - 1))
    //         equation2 = (6 * i - 1) 
    //     } else {
    //         equation2 = 0;
    //     }
    //     if( (6 * i + 1) <= num) {
    //         console.log((6 * i + 1))
    //         equation1 = (6 * i + 1) 
    //     } else {
    //         equation1 = 0;
    //     }
    //     sum += equation1 + equation2;
    // }
    // return sum + 2 + 3;
// };

// console.log(sumPrimes(11));
// console.log(sumPrimes(977));







//## Smallest Common Multiple #14

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common  multiple of both 1 and 3 that is evenly divisble by all numbers between 1 and 3.  The answer here would be 6.

// function smallestCommons(arr) {
//     const tempArr = [...arr].sort((a, b) => a - b);
//     for(let i = tempArr[0]; i <= tempArr[1]; i++) {
//         if(!tempArr.includes(i)) {
//             tempArr.push(i);
//         }
//     }
//     tempArr.sort((a, b) => a - b);

//     let smallestMultiple = tempArr[tempArr.length - 1];
//     let foundSmallestMultiple = false;
//     let multiplier = 1;
//     let output;
//     do {
//         foundSmallestMultiple = tempArr.every(number => {       
//             return smallestMultiple * multiplier % number === 0;
//         });

//         if(!foundSmallestMultiple){
//             multiplier++;
//         } else {
//             output = smallestMultiple * multiplier
//         }
//     }
//     while(!foundSmallestMultiple);

//     return output;
// }

// // console.log(smallestCommons([1, 5]));
// // console.log(smallestCommons([5, 1]));
// console.log(smallestCommons([2, 10]));






// ## Drop it #15

// Given the array 'arr', iterate through and remove each element starting from the first element (the 0 index) until the function 'func' returns 'true' when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, 'arr' should be returned as an empty array.

function dropElements(arr, func) {
    const indexOfFuncFirstTrue = arr.indexOf(arr.filter(element => func(element))[0])
    let outputArr = []

    for(let i = indexOfFuncFirstTrue; i <= arr.length - 1; i++) {
        outputArr.push(arr[i])
    }

    if(outputArr[0] === undefined) {
        return [];
    }
    return outputArr;
}

console.log(dropElements([1, 2, 3], function(n) { return n < 3; }));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));


