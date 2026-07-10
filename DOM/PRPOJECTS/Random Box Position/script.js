const randomBox = document.querySelector(".random-box");
const startBut = document.querySelector("button");
const timeCounter = document.querySelector("span");


startBut.addEventListener("click", () => {
  let time = 0;
  clearInterval(timer)
  timeCounter.innerHTML = time;
  timer = setInterval(() => {
    time += 1;
    timeCounter.innerHTML = time;
    let distTop = `${Math.floor(Math.random() * 99) + 1}%`;
    let distLeft = `${Math.floor(Math.random() * 99) + 1}%`;

    randomBox.style.top = distTop;
    randomBox.style.left = distLeft;
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
  }, 10000);
});
