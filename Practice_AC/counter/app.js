let incCount = 0;
let dumIncCount = 0;

let decCount = 0;
let dumDecCount = 0;

let inc = document.querySelector("#inc");
let dec = document.querySelector("#dec");
let display = document.querySelector(".display");
let spIc = document.querySelector("#spIc");
let spDc = document.querySelector("#spDc");


inc.addEventListener("click", () => {
    if(dumIncCount >= 10){
        dumIncCount = 0;
    }else {
        incCount++;
        dumIncCount++;
    }
    console.log(dumIncCount);
    display.innerHTML = incCount - decCount;
    spIc.innerHTML = incCount;
});

dec.addEventListener("click", () => {
    if(dumDecCount >= 10){
        dumDecCount = 0;
    }else {
        decCount++;
        dumDecCount++;
    }
    console.log(dumDecCount);
    display.innerHTML = incCount - decCount;
    spDc.innerHTML = decCount;
    
});

// let i = 0;
// i++;
// console.log(i++);