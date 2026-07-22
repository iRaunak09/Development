// Q1(To delete all occurrences of element ‘num’)
// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);


// Q2(No of digits)
// let num = 287152;
// let count = 0;
// let temp = num;
// while(Math.floor(temp) != 0){
//     temp /= 10;
//     count++;
// }
// console.log(count);


// Q3(Sum of digits)
// let num = 287152;
// let sum = 0;
// let digit = 0;
// let temp1 = num;
// let temp2 = num;
// while(Math.floor(temp1) != 0){
//     temp1 /= 10;
//     digit = temp2 % 10;
//     sum += digit;
//     temp2 = Math.floor(temp1);
// }
// console.log(sum);


// Q4(Factorial
// let num = 7;
// let fact = 1;
// for(let i = num; i > 0; i--){
//     fact *= i;
// }
// console.log(`Factorial of ${num} = ${fact}`);


// Q5(Largest number in a given array)
// let arr = [17970,345788,32,442,5432];
// let largest = arr[0];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > largest){
//         largest = arr[i];
//     }
// }
// console.log(largest);
// console.log(arr["0"]);