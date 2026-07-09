const taskInput = document.querySelector("#task-input");
const taskAddButton = document.querySelector("#task-add-button");
const taskList = document.querySelector(".task-list");
const taskComList = document.querySelector(".completed-task");

taskAddButton.addEventListener("click", () => {
  let task = taskInput.value;
  let taskId = task.replaceAll(" ", "-");
  if (task.trim() === "") return;
  taskList.innerHTML += `
    <div class="task-in-list" id="${taskId}">
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
  let delbutton = document.querySelector(".del")
  let myTask = document.querySelector(`#${taskId}`)
  delbutton.addEventListener('click', ()=>{
      console.log(myTask)
  })
  
});