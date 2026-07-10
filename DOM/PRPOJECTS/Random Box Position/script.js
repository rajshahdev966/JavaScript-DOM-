const randomBox = document.querySelector(".random-box");
const startBut = document.querySelector("button");
const timeCounter = document.querySelector("span");
let timer;
let time;
let radomBoxGen = ()=>{
    time += 1;
    timeCounter.innerHTML = time;
    let distTop = `${Math.floor(Math.random() * 99) + 1}%`;
    let distLeft = `${Math.floor(Math.random() * 99) + 1}%`;

    randomBox.style.top = distTop;
    randomBox.style.left = distLeft;
}

startBut.addEventListener("click", () => {
  time = 0;
  timeCounter.innerHTML = time;
  clearInterval(timer);
  
  timer = setInterval(() => {
    if(time === 10){
    clearInterval(timer);
    return;
  }
    radomBoxGen();
    
  }, 1000);
  

//   setTimeout(() => {
//     clearInterval(timer);
//   }, 10000);
});
