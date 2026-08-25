let userSeq = [];
let gameSeq = [];
let btns = ["pink", "cadetblue", "orange", "violet"];
let level = 0;
let gameStarted = false;
let h2 = document.querySelector("h2");

document.addEventListener("keydown", () => {
    if(gameStarted == false){
        gameStarted = true;
        levelUp();
    }
});

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ran = Math.floor(Math.random() * 4);    
    let randBtn = btns[ran];
    // console.log(randBtn);
    let btn = document.querySelector(`.${randBtn}`);
    gameSeq.push(randBtn);
    // console.dir(btn);
    gameFlash(btn);
    // userRes();
}

function gameFlash(btn){
    btn.classList.add("gameFlash");
    // console.log(btn.classList);
    setTimeout(() => {
        btn.classList.remove("gameFlash");
    },250);
    console.log(`Game seq: ${gameSeq}`);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    console.log(btn.classList);
    setTimeout(() => {
        btn.classList.remove("userFlash"); 
    },250);
}

function userRes(){
    // console.log(this);
    let btn = this;
    console.log(btn);
    userFlash(btn);
    userSeq.push(btn.getAttribute("id")); 
    console.log(`User seq: ${userSeq}`);
    let idx = userSeq.length - 1;
    check(idx); 
}

let items = document.querySelectorAll(".item");
for(let item of items){
    item.addEventListener("click", userRes);
}

function check(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(idx == gameSeq.length - 1){
            levelUp();
        }
    }else {
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        h2.innerText = `Score: ${level}`;
        setTimeout(reset, 2000);
    }
}

function reset(){
    h2.innerText = "Game over, press any button to start a new game";
    gameSeq = [];
    userSeq = [];
    level = 0;
    gameStarted = false;
    // console.log("reset initiated!!");
}

