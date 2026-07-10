const randomBox = document.querySelector(".random-box")
const box = document.querySelector(".box")
const startButton = document.querySelector("button")
const timeCount = document.querySelector("#time-count")
const scoreCount = document.querySelector("#score-count")
let interval;
let time;
const bigBoxHeight = box.clientHeight
const ranBoxHeight = randomBox.offsetHeight 
const bigBoxWidth = box.clientWidth
const ranBoxWidth = randomBox.offsetWidth 



let randomPosGen = ()=>{
    time += 1;
    timeCount.innerHTML = time;
    let posTop = Math.floor((Math.random() * 99) + 1);
    let posLeft = Math.floor((Math.random() * 99) + 1);
    let red = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    randomBox.style.top = `${posTop}%`
    randomBox.style.left = `${posLeft}%`
    randomBox.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`
}

startButton.addEventListener('click', ()=>{
    time = 0
    timeCount.innerHTML = time;
    startButton.disabled = true;
    clearInterval(interval);
    interval = setInterval(()=>{
        randomPosGen();
    },1000)
    setTimeout(()=>{
        clearInterval(interval);
        startButton.disabled = false;
    },10000)
})

