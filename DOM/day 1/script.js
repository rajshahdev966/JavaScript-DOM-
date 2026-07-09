    let round = document.querySelector(".round");
    let button = document.querySelector("button");

    button.addEventListener('click', () => {
        // if(button.textContent == "ON"){
        //     button.textContent = "OFF";
        // }else{
        //     button.textContent = "ON";
        // }
        // round.classList.toggle("lightUp")
        if(round.classList.toggle("lightUp")){
            button.textContent = "OFF"
        }else{
            button.textContent = "ON"
        }
        
        
        

    })
    