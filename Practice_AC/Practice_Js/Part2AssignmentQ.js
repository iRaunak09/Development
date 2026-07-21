// // // Largest of 3 numbers
// // let a = 19;
// // let b = 18;
// // let c = 19;

// // if(a >= b && a >= c){
// //     console.log(`${a} is the largest of three values`);
// // }else if(a <= b && b >= c){
// //     console.log(`${b} is the largest of three values`);
// // }else if(a <= c && b <= c){
// //     console.log(`${c} is the largest of three values`);
// // }

// // // To check the last digit
// // let d = 10;
// // let e = 200;

// // if ((d % 10) === (e % 10)){
// //     console.log("Same");
// // }else {
// //     console.log("not");
// // }

// let a = "Name";
// console.log(a);
// a = "Raunak";
// console.log(a);

// let arr = ["Hello", "Raunak", 10];
// let arr1 = arr.push(9);
// console.log(arr1);
// console.log(arr[2][0]);
// console.log(arr);

// let arr2 = ['january', 'july', 'march', 'august'];
// arr2.shift();
// arr2.shift();
// arr2.unshift('june');
// arr2.unshift('july');
// console.log(arr2);


let arr2 = ['january', 'july', 'march', 'august'];
arr2.splice(0,2,"july","june");
console.log(arr2);