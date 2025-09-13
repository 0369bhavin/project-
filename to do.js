window. onload=function(){
   renderTasks();
   document.getElementById("btn").addEventListener("click",addtask)
   document.getElementById("btn2").addEventListener("click",deleteTask)
}
function addtask(){
    const input=
    document.getElementById("take-input")
    const taskeinput=input.value.trim();
if(taskeinput===""){
    alert("please enter the a task");
    return;
}
const tasks=gettaskfromstorage();
tasks.push({text:taskeinput,completed:false});
saveTasksTOStorage(tasks);
input.value="";
renderTasks();
}
//delete selected tasks
function deleteTask() {
    const tasks = gettaskfromstorage();
    const checkboxes = document.querySelectorAll(".task-checkbox"); // fixed class selector

    const updatedTasks = tasks.filter((task, index) => !checkboxes[index].checked); // keep only unchecked
    saveTasksTOStorage(updatedTasks);
    renderTasks(); // r
}

// get task from localstorage
function gettaskfromstorage(){
    const tasks=
    localStorage.getItem("tasks");
return tasks ? JSON.parse(tasks):[];
}
//save tasks to localstorage
function saveTasksTOStorage(tasks){
    localStorage.setItem("tasks",JSON.stringify(tasks))
}
//render task list
function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  const tasks = gettaskfromstorage();

  tasks.forEach((task, index) => {
    const listItem = document.createElement("div");
let checkbox=
    document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";

    const label = document.createElement("label");
    label.textContent = task.text;
    label.style.marginLeft = "8px";

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    taskList.appendChild(listItem);
  });
}
