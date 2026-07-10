const randomBox = document.querySelector(".random-box")
const startBut = document.querySelector("button")


 


startBut.addEventListener('click', ()=>{
    console.log("Hello");
    let distTop = `${Math.floor(Math.random() * 99) + 1}%`;  
    let distLeft = `${Math.floor(Math.random() * 99) + 1}%`; 
    randomBox.setAttribute("top", distTop)
    randomBox.setAttribute("left", distLeft)


})



