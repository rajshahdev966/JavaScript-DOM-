


const form = document.querySelector("form")
const nameForm = document.querySelector("#name-form")
const mailForm = document.querySelector("#mail-form")
const imageForm = document.querySelector("#image-url")
const submitButton = document.querySelector("#submit-but")
const userCollection = document.querySelector(".user-collection")

let userData = [
  {
    "id": 1,
    "name": "Aarav Sharma",
    "mail": "aarav.sharma@example.com",
    "image": "https://i.pravatar.cc/150?img=1"
  },
  {
    "id": 2,
    "name": "Emma Wilson",
    "mail": "emma.wilson@example.com",
    "image": "https://i.pravatar.cc/150?img=2"
  },
  {
    "id": 3,
    "name": "Liam Carter",
    "mail": "liam.carter@example.com",
    "image": "https://i.pravatar.cc/150?img=3"
  },
  {
    "id": 4,
    "name": "Priya Patel",
    "mail": "priya.patel@example.com",
    "image": "https://i.pravatar.cc/150?img=4"
  },
  {
    "id": 5,
    "name": "Noah Brown",
    "mail": "noah.brown@example.com",
    "image": "https://i.pravatar.cc/150?img=5"
  },
  {
    "id": 6,
    "name": "Sophia Davis",
    "mail": "sophia.davis@example.com",
    "image": "https://i.pravatar.cc/150?img=6"
  },
  {
    "id": 7,
    "name": "Kabir Mehta",
    "mail": "kabir.mehta@example.com",
    "image": "https://i.pravatar.cc/150?img=7"
  }
]

userData.forEach((userObj, index)=>{
    let userName = userObj.name;
    let email = userObj.mail
    let imgUrl = userObj.image;
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
})

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

