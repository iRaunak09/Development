// Q1
// const arrayAverage = (arr) => {
//     let avg = 0;
//     for(let i = 0; i < arr.length; i++){
//         avg += arr[i];
//     }
//     return avg / arr.length;
// }

// let arr = [1,2,3,4,5,6,7];
// console.log(arrayAverage(arr));


// Q2
// const isEven = (n) => {
//     if(n % 2 === 0){
//         return "even";
//     }else {
//         return "not even";
//     }
// }

// let n = 12;
// console.log(isEven(n));


// const object = {
//     message:'Hello,World!',
//     logMessage(){
//         console.log(this.message);
//         return this.logMessage;
//     }
// };
// // console.log(object.logMessage());
// setTimeout(object.logMessage(),1000);


let length = 4;

function callback() {
    console.log(this.length);
}

const object = {
    length: 5,

    method(callback) {
        // callback();
        console.log(callback)
    },
};

object.method(callback, 1, 2);