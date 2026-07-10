const randomBox = document.querySelector(".random-box");
const box = document.querySelector(".box");
const startButton = document.querySelector("button");
const timeCount = document.querySelector("#time-count");
const scoreCount = document.querySelector("#score-count");
let interval;
let time;
const reqHeight = box.clientHeight - randomBox.clientHeight - 1;
const reqWidth = box.clientWidth - randomBox.clientHeight - 1;

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

startButton.addEventListener("click", () => {
  time = 0;
  score = 0;
  
  timeCount.innerHTML = time;
  startButton.disabled = true;
  clearInterval(interval);
  interval = setInterval(() => {
    randomPosGen();
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    startButton.disabled = false;
  }, 10000);
});

randomBox.addEventListener('click', ()=>{
    randomBox.disabled = true;
    score += 1;
    scoreCount.innerHTML = score
}) 