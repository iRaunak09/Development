const favMovie = "3Idiots";

let guess = prompt("Guess my favourite movie");

while((guess != favMovie) && (guess != "quit")) {
    guess = prompt("Wrong answer!! Try again");
}

if(guess == favMovie){
    alert("Congratulations!!, you guessed it right");
}else {
    alert("You chose to quit");
}