let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["yellow", "purple", "green", "red"];
let highestScore = 0;
document.addEventListener("keypress", function () {
    if (!started) {
        console.log("game started");
        started = true;
        levelUp();
    }
});
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randCol = btns[randIdx];
    gameSeq.push(randCol);
    let randBtn = document.querySelector(`.${randCol}`);
    console.log(gameSeq);

    btnFlash(randBtn);
}
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
};
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 250);
};
function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp(), 1000);
            if (level > highestScore) {
                highestScore = level;
                let hs = document.querySelector("h3");
                hs.innerText = `highestScore : ${highestScore}`;
            }
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level} </b> </br>Press Any Key to Start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}
function btnPress() {
    let btn = this;
    userFlash(btn);
    let col = btn.getAttribute("id");
    userSeq.push(col);
    checkAns(userSeq.length - 1);

}
let allBtns = document.querySelectorAll(".divBtn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
};
function reset() {
    started = false;
    gameSeq = [];
    level = 0;
    levelUp;
}
