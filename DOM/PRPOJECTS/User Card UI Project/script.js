const form = document.querySelector("form");
const nameForm = document.querySelector("#name-form");
const mailForm = document.querySelector("#mail-form");
const imageForm = document.querySelector("#image-url");
const submitButton = document.querySelector("#submit-but");
const userCollection = document.querySelector(".user-collection");
let userData = [
  {
    id: 1,
    name: "Aarav Sharma",
    mail: "aarav.sharma@example.com",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Emma Wilson",
    mail: "emma.wilson@example.com",
    image: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 3,
    name: "Liam Carter",
    mail: "liam.carter@example.com",
    image: "https://i.pravatar.cc/150?img=12    ",
  },
  {
    id: 4,
    name: "Priya Patel",
    mail: "priya.patel@example.com",
    image: "https://i.pravatar.cc/150?img=24",
  },
  {
    id: 5,
    name: "Noah Brown",
    mail: "noah.brown@example.com",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "Sophia Davis",
    mail: "sophia.davis@example.com",
    image: "https://i.pravatar.cc/150?img=26",
  },
  {
    id: 7,
    name: "Kabir Mehta",
    mail: "kabir.mehta@example.com",
    image: "https://i.pravatar.cc/150?img=14",
  },
];

let userCardPrint = () => {
    userCollection.innerHTML = ""
  userData.forEach((userObj, index) => {
    let userName = userObj.name;
    let email = userObj.mail;
    let imgUrl = userObj.image;
    userCollection.innerHTML += `<div class="user-card">
                <div class="user-card-img">
                    <img src="${imgUrl}" alt="">
                </div>
                <div class="user-card-text">
                    <div>
                        <span>${userName}</span>
                        <p>Email: <br> ${email}</p>
                    </div>
                    <div class="user-card-buttons">
                        <button class="edit" onclick="editClick(${index})">Edit</button>
                        <button class="del" onclick="delCard(${index})" style="background-color: #e03131; color: white">Delete</button>
                    </div>
                </div>
            </div>`;
  });
};
userCardPrint();
submitButton.addEventListener("click", (events) => {
  events.preventDefault();
  let userName = nameForm.value;
  let email = mailForm.value;
  let imgUrl = imageForm.value;

  if (userName.trim() === "" || email.trim() === "" || imgUrl.trim() === "")
    return;
  let newUser = {
    name: userName,
    mail: email,
    image: imgUrl,
  }
  userData.push(newUser);
  userCardPrint();
  form.reset();
});

let delCard = (index)=>{
    userData.splice(index, 1);
    userCardPrint();
}
let editClick = (index)=>{
    let imgUrl = userData[index].image;
    document.querySelectorAll(".user-card")[index].innerHTML = `<div class="user-card">
                <div class="user-card-img">
                    <img src="${imgUrl}" alt="">
                </div>
                <div class="user-card-text">
                    <div>
                        <form>
                        <input type="text" placeholder="Enter the name" class="update-input" id="name-updated">
                        Email: <br> <input type="mail" placeholder="Enter the mail" class="update-input" id="mail-updated">
                    </div>
                    <div class="user-card-buttons">
                        <input type="submit" class="update" onclick="updateUser(${index})" value="Update">
                        </form>
                        <button class="del" onclick="delCard(${index})" style="background-color: #e03131; color: white">Delete</button>
                    </div>
                </div>
            </div>`


    

}
let updateUser = (index) => {
    if (document.querySelector("#name-updated").value.trim() === "" || document.querySelector("#mail-updated").value.trim() === "") return;
    userData[index].name = document.querySelector("#name-updated").value;
    userData[index].mail = document.querySelector("#mail-updated").value;
    userCardPrint();
    }