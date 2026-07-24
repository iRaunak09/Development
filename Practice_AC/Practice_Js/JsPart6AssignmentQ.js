// Q1
// function func(arr, num){
//     let requiredArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > num){
//             requiredArr.push(arr[i]);
//         }
//     }
//     return requiredArr;
// }

// let arr = [1,2,3,4,5,6,6,54,3,2,2,3443,22,2,9];
// let num = 9;
// let requiredArr = func(arr, num);
// console.log(requiredArr);


// Q2
// function uniqueCharacters(str){
//     let uniqueStr = "";
//     for(let i = 0; i < str.length; i++){
//         if(!(uniqueStr.includes(str[i]))){
//             uniqueStr += str[i];
//         }
//     }
//     return uniqueStr;
// }
// let str = "abcdabcdefgggh";
// let uniqueArr = uniqueCharacters(str);
// console.log(uniqueArr);


// Q3
// function longestName(arr){
//     let largest = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].length > largest.length){
//             largest = arr[i];
//         }
//     }
//     return largest;
// }

// // let arr = ["Australia", "Germany", "United States of America"];
// let arr = ["Australia", "Germany", "USA"];
// let largest = longestName(arr);
// console.log(largest);


// Q4
// function numberOfVowels(str){
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if((str[i] == 'a') || (str[i] == 'e') || (str[i] == 'i') || (str[i] == 'o') || (str[i] == 'u')){
//             count++;
//         }
//     }
//     return count;
// }

// let str = "john";
// let count = numberOfVowels(str);
// console.log(count);

// Q5
// function generateRandom(start, end){
//     let ran = Math.floor(Math.random() * (end - start + 1)) + start;
//     return ran;
// }

// let ran = generateRandom(1,6);
// console.log(ran);