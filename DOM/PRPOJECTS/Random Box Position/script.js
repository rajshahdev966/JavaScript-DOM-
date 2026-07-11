
const randomBox = document.querySelector(".random-box");
const box = document.querySelector(".box");
const main = document.querySelector("main")
const startButton = document.querySelector("button");
const timeCount = document.querySelector("#time-count");
const scoreCount = document.querySelector("#score-count");
const gameOver = document.querySelector("#game-over")
let interval;
let time;
const reqHeight = box.clientHeight - randomBox.clientHeight - 1;
const reqWidth = box.clientWidth - randomBox.clientHeight - 1;
gameOver.style.display = "none"

let randomPosGen = () => {
  time += 1;
  timeCount.innerHTML = time;
  let posTop = Math.floor(Math.random() * reqHeight + 1);
  let posLeft = Math.floor(Math.random() * reqWidth + 1);
  let red = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  randomBox.style.top = `${posTop}px`;
  randomBox.style.left = `${posLeft}px`;
  randomBox.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
};
randomBox.style.pointerEvents = "none";
startButton.addEventListener("click", () => {
  time = 0;
  score = 0;
  scoreCount.innerHTML =  score;
  timeCount.innerHTML = time;
  startButton.disabled = true;
  clearInterval(interval);
  interval = setInterval(() => {
    randomBox.style.pointerEvents = "auto";

    randomPosGen();
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    startButton.disabled = false;
   randomBox.style.pointerEvents = "none";
  }, 10000);

  setTimeout(() => {
    main.style.filter = "blur(5px)"
    gameOver.style.display = "flex"


  }, 15000);
});

randomBox.addEventListener('click', ()=>{
    score += 1;
    scoreCount.innerHTML = score
}) 