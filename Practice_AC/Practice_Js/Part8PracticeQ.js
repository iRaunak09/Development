// let arr = [10,100,0,2000,30,921];
// const check = arr.every((el) => (el % 10 === 0));
// console.log(check);


// function checkMin(arr){
//     let min = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return min;
// }
let arr = [1,2,3,-4,5,6,-1,-1.5];
// let min = checkMin(arr);
// console.log(min);


const min = arr.reduce((acc, el) => {
    if(acc < el){
        return acc;
    }
    return el;
})
console.log(min);
