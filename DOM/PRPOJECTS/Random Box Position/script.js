const randomBox = document.querySelector(".random-box")
const startButton = document.querySelector("button")
const timeCount = document.querySelector("#time-count")
const scoreCount = document.querySelector("#score-count")
let interval;

let randomPosGen = ()=>{
    let posTop = (Math.random() * 99) + 1;
    let posLeft = (Math.random() * 99) + 1;
    randomBox.style.top = `${posTop}%`
    randomBox.style.left = `${posLeft}%`
}

startButton.addEventListener('click', ()=>{
    let time = 0
    clearInterval(interval);
    startButton.style.display = "none"
    interval = setInterval(()=>{
        time += 1;
        timeCount.innerHTML = time;
        randomPosGen();


    },1000)
    setTimeout(()=>{
        clearInterval(interval);
        startButton.style.display = "flex"
    },10000)
})
