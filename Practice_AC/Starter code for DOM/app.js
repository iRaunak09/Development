// let img = document.getElementsByClassName("oldImg");
// console.log(img);
// for(let i = 0; i < img.length; i++){ 
//     // console.dir(img[i].src);
//     img[i].src = "assets/spiderman_img.png";
// }

let newEl = document.createElement("p");
newEl.textContent = "Hey, I'm red";
// newEl.style.color = "red";
newEl.classList.add("red");


let newH = document.createElement("h1");
newH.textContent = "Hey, I'm blue";
// newH.style.color = "blue";
newH.classList.add("blue");

let body = document.querySelector("body");
body.append(newEl);
body.append(newH);

let newDiv = document.createElement("div");
newDiv.textContent = "I'm div";
newDiv.classList.add("box");
// newDiv.style.border = "7px solid black";
// newDiv.style.backgroundColor = "pink";

let h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

let p = document.createElement("p");
p.textContent = "Me too!";

newDiv.append(h1);
newDiv.append(p);
body.append(newDiv);