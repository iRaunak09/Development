const maxNum = prompt("Enter the max number till which you want to guess(0 -> max) ");
const ran = Math.floor(Math.random() * (maxNum)) + 1;
console.log(ran);
// alert(ran);
let userGuess = prompt(`Guess the number in the range of 0 -> ${maxNum}`);

while(!(userGuess == ran || userGuess == "quit")){
    userGuess = prompt(`Guess the number in the range of 0 -> ${maxNum}`);
}

if(userGuess == ran){
    alert("You guessed it right");
}else {
    alert("Quitting App");
}