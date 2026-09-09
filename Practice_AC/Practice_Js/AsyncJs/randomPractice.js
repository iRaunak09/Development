// let checkEven = new Promise((resolve, reject) => {
//     let number = 7;
//     if (number % 2 === 0) resolve("The number is even!");
//     else reject("The number is odd!");
// });
// checkEven
//     .then(function (message) {console.log(message)})// On success
//     .catch((error) => console.error(error)); // On failure

// async function getUserData() {
//     const url = 'https://github.com';

//     try {
//         const response = await fetch(url); // Wait for network response
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json(); // Wait for JSON parsing
//         console.log("User Profile:", data.name);
//     } catch (error) {
//         console.error("Failed to fetch user data:", error.message);
//     }
// }

// getUserData();


const response = await fetch("https://official-joke-api.appspot.com/random_joke");

const data = await response.json();
console.log(response);

// setTimeout(() => {
//     console.log("Hello");
//     console.log(response);
// }, 4000);

