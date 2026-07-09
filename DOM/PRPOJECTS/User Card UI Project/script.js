


const form = document.querySelector("form")
const nameForm = document.querySelector("#name-form")
const mailForm = document.querySelector("#mail-form")
const imageForm = document.querySelector("#image-url")
const submitButton = document.querySelector("#submit-but")
const userCollection = document.querySelector(".user-collection")

let userData = []


submitButton.addEventListener("click", (events)=>{
    events.preventDefault();
    let userName = nameForm.value;
    let email = mailForm.value
    let imgUrl = imageForm.value;

    if(userName.trim() === "" || email.trim() === "" || imgUrl.trim() === "") return;

    userCollection.innerHTML += `<div class="user-card">
                <div class="user-card-img">
                    <img src="${imgUrl}" alt="">
                </div>
                <div class="user-card-text">
                    <div>
                        <span>${userName}</span>
                        <p>Email: ${email}</p>
                    </div>
                    <div class="user-card-buttons">
                        <button class="edit" onclick="">Edit</button>
                        <button class="del" onclick="" style="background-color: #e03131; color: white">Delete</button>
                    </div>
                </div>
            </div>`
    
    form.reset();
})

