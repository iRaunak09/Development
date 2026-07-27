// Q1
// let arr = [2,2,3];
// const num = arr.reduce((acc, el) => {
//     return (acc + (el ** 2)) ;
// }, 0);
// console.log(num / arr.length);


// Q2
// let arr1 = [2,2,3,7];
// let newArr = arr1.map((el) => el + 5);
// console.log(newArr)


// Q3
// let arr2 = ["Tony", "Stark", "Steve", "Rogers"];
// let newArr2 = arr2.map((el) => el.toUpperCase());
// console.log(newArr2);

// Q4
// function doubleAndReturnArgs(arr, ...args){
//     arr.push(...args.map((el) => el * 2));
//     return arr;
// }

// let arr = [1,27,4,3,2,4,4];
// let retArr = doubleAndReturnArgs(arr, 1,2,3,5,6,7,8,9);
// console.log(retArr);


// Q5
function mergeObjects(obj1, obj2){
    const obj = {
        ...obj1,
        ...obj2
    };
    return obj;
}
const obj1 = {
    name: "John",
    age: 19,
    country: "USA"
};

const obj2 = {
    name1: "John",
    age1: 19,
    country1: "USA"
};

const obj = mergeObjects(obj1, obj2);
// const obj = {...obj1, ...obj2};
console.log(obj);