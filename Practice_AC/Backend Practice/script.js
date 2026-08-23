// let n = 7;
// for(let i = 0; i < n; i++){
//     console.log("Hello", i);
// }
// console.log("Bye");

// console.log(process.argv);
// let finalResult = require('./math.js');
// console.log(finalResult);
// console.log(finalResult.a);
// console.log(finalResult.b);
// console.log(finalResult.c);
// console.log(finalResult.f());


// ----------------
// let info = require("./Fruits");
// console.log(info);


const figlet = require('figlet');

figlet("Hello", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

