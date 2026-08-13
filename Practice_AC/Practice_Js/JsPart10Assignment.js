let inp = document.querySelector("input");
let box = document.querySelector(".box");
let btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    event.preventDefault();
});
inp.addEventListener("mouseout", function(){
    console.log("Mouse out of the input box");
});

inp.addEventListener("keydown", function(){
    // event.preventDefault();
    console.log("The input key was pressed");
});

window.addEventListener("load", () => {
    alert("The page and all it's resources were loaded");
});

let newBtn = document.createElement("button");
document.querySelector("body").append(newBtn);
newBtn.textContent = "New Click Me";

newBtn.addEventListener("click", () => {
    newBtn.style.backgroundColor = "pink";
});

let h2 = document.querySelector("h2");
let name = document.querySelector("#name");
let lastValid = "";
name.addEventListener("input", function(){
   for(let i = 0; i < name.value.length; i++){
        if(name.value[i].validity.patternMismatch){
        h2.innerText = lastValid;
        }else {
        lastValid = lastValid.append(name.value[i]);
        h2.innerText = lastValid;
        }
    }
});

