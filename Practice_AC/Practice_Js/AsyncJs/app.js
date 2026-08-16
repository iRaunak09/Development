let h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         nextColorChange();
//     },delay);
// };
// // setTimeout(() => {
// //     changeColor("red");
// //     // h1.style.color = "red";
// // }, 1000);

// // setTimeout(() => {
// //     // h1.style.color = "yellow";
// //     changeColor("green");
// // }, 2000);

// // setTimeout(() => {
// //     changeColor("yellow");
// //     // h1.style.color = "green";
// // }, 3000);

// // setTimeout(changeColor, 1000);
// // setTimeout(changeColor, 2000);
// // setTimeout(changeColor, 3000);

// // changeColor('red', 1000);

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000);
//     });
// });



// ------------------Refactoring old change color code with promises
function changeColor(color,delay){
    return new Promise((resolve, error) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("success");
        }, delay);

        // if(h1.style.color == color){
        //     resolve("success");
        // }else {
        //     error("failure");
        // }
    });
}

changeColor("red", 1000)
    .then(() => {
        console.log("color changed to red");
        return changeColor("green", 1000);
    })
    .then(() => {
        console.log("color changed to green");
        return changeColor("yellow", 1000);
    })
    .then(() => {
        console.log("color changed to yellow");
    })
    .catch();





// ---------------
// function saveToDb(data){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     return new Promise((resolve, reject) => {
//         if(internetSpeed > 4){
//             resolve();
//         }else {
//             reject();
//         }
//     });
// }

// saveToDb("john")
//     .then(() => {
//         console.log("Promise was resolved");
//         saveToDb("Styen")
//         .then(() => {
//             console.log("Data 2 was stored");
//         })
//         .catch(() => {
//             console.log("Data2 not stored");
//         });
//     })
//     .catch(() => {
//         console.log("Promise was rejected");
//     });

// saveToDb("john")
//     .then((result) => {
//         console.log("Result:", error);
//         console.log("Promise was resolved");
//         return saveToDb("travis");
//     })
//     .then((result) => {
//         console.log("Result:", error);
//         console.log("Data2 saved");
//     })
//     .catch((error) => {
//         console.log("Error:", result);
//         console.log("Promise was rejected");
//     });
