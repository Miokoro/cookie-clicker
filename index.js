let currentClickCount = 1;
let currentCount = 0;
let startedGame = false;
let time = 60;
let startTime;
const timer = document.getElementById("timer");
const label = document.getElementById("label");
let score = document.getElementById("score");
const finalScore = document.getElementById("finalScore");
let intervalId;

function handleClick() {
    if(!startedGame){
        currentClickCount = 0;
    }
    else{
        currentClickCount = 1;
    }

    currentCount += currentClickCount;
    score.textContent = currentCount;
}

function start() {
    startTime = Date.now();
    intervalId = setInterval(update, 10);
    startedGame = true;
}

function reset() {
    score.textContent = 0;
    currentCount = 0;
    currentClickCount = 1;
    timer.textContent = "Time: 60.00";
    clearInterval(intervalId);
    time = 60;
    finalScore.textContent = "";
    startedGame = false;
}

function update() {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime) / 1000;
    const remainingTime = Math.max(60 - elapsedTime, 0);

    let seconds = Math.floor(remainingTime);
    let milliseconds = Math.floor((remainingTime % 1) * 100);

    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    timer.textContent = `Time: ${seconds}.${milliseconds}`;

    if (remainingTime <= 0) {
        clearInterval(intervalId);
        finalScore.textContent = `Your final score is ${score.textContent}!`
        currentClickCount = 0;
        startedGame = false;
    }
}