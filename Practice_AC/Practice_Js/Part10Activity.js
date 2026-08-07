let btn = document.querySelector("button");
// btn.addEventListener("click",changeH1);
btn.addEventListener("click",change);

function func(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r}, ${g}, ${b})`;
    return  color;
}

function change(){
    let call = func();
    let div = document.querySelector("div");
    div.style.backgroundColor = call;

    let h1 = document.querySelector("h1");
    h1.textContent = call;
}

// function changeH1(){
//     let h1 = document.querySelector("h1");
//     h1.textContent = func();
// }

// `rgb(${func()}, ${func()}, ${func()})`


