// Q1
let inputEl = document.createElement("input");
let buttonEl = document.createElement("button");
// let but = document.querySelector("button");
buttonEl.textContent = "Click Me!";

let b = document.querySelector("body");
b.append(inputEl);
b.append(buttonEl);


// Q2
// let inp = document.querySelector("input");
inputEl.setAttribute("placeholder", "Username");

// let but = document.querySelector("button");
buttonEl.setAttribute("id", "btn");


// Q3
let throughIdAndQuery = document.querySelector("#btn");
throughIdAndQuery.setAttribute("class", "buttonClass");
throughIdAndQuery.style.backgroundColor = "blue";
throughIdAndQuery.style.color = "white";


// Q4
let h1 = document.createElement("h1");
h1.innerHTML = "<u> DOM Practice </u>";
b.append(h1);

// let selectH1 = document.querySelector("h1");
h1.classList.add("h1Class");
// selectH1.classList.add("h1Class");


// Q5
const p = document.createElement("p");
p.innerHTML = "Apna College <b>Sigma</b> practice";
b.append(p);






