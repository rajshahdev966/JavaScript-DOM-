const taskInput = document.querySelector("#task-input");
const taskAddButton = document.querySelector("#task-add-button");
const taskList = document.querySelector(".task-list");
const taskComList = document.querySelector(".completed-task");

taskAddButton.addEventListener("click", () => {
  let task = taskInput.value;
  if (task.trim() === "") return;
  taskList.innerHTML += `
    <div class="task-in-list">
              <div><span>${task}</span></div>
              <div style="display: flex; gap: 8px">
                <button
                  class="edit"
                  style="background-color: rgb(201, 175, 109)"
                >
                  Edit
                </button>
                <button
                  class="del"
                  style="background-color: rgb(243, 155, 155)"
                >
                  Delete
                </button>
              </div>`;
  taskInput.value = "";
    let myTask = document.querySelector(".task-in-list");

  let delButton = document.querySelector(".del");
  delButton.addEventListener('click', ()=>{
    myTask.innerHTML = ""
  })
  let editButton = document.querySelector(".edit");
  editButton.addEventListener("click", () => {
    taskList.innerHTML = `
    <div class="task-in-list">
              <div>
              <input type="text" class="text-updation" placeholder="Edit your Task Here">
              <button class="text-update-button">Update</button>
              </div>
              <div style="display: flex; gap: 8px">
                <button
                  class="edit"
                  style="background-color: rgb(201, 175, 109)"
                >
                  Edit
                </button>
                <button
                  class="del"
                  style="background-color: rgb(243, 155, 155)"
                >
                  Delete
                </button>
              </div>`;
    const taskUpdateButton = document.querySelector(".text-update-button")
    const taskUpdateInput = document.querySelector(".text-updation")
    let taskUpdate = taskUpdateInput.value;
    taskUpdateButton.addEventListener('click', ()=>{

    })
    
  });

});
