// Q1
// const func = (n) => (n * n);
// console.log(func(16));


// Q2
const func1 = function(){
    const id =  setInterval(() => {
                    console.log("Hello World");
                }, 2000);
        
    setTimeout(() => {
        clearInterval(id);
        console.log("clear interval ran");
    }, 11000);
}
console.log(func1());

// setTimeout(() => {
//     clearInterval(id);
//     console.log("clear interval ran");
// }, 10000);