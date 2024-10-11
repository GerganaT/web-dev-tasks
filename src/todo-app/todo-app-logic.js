
let newTaskEntryField = document.getElementById("new-task-entry");

const tasksSection = document.getElementById("tasks-section");

const tasks = document.createElement("div");
tasks.id = "tasks-list";

const noTasksText = document.createElement("h3");
noTasksText.textContent = "Your tasks will appear here";
tasksSection.append(noTasksText);

document.getElementById("new-task-button").addEventListener("click", ()=> {
    if(newTaskEntryField.value !== ""){

        if(tasksSection.contains(noTasksText)){
            tasksSection.removeChild(noTasksText);
            tasksSection.append(tasks);
        }

        tasks.append(createTaskItem(newTaskEntryField.value));
        newTaskEntryField.value = "";
    }else{
        alert("Please enter new task!");
    }
} )

function createTaskItem(taskText){
    const taskItem = document.createElement("div");
    taskItem.className = "task-list-item";
    
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.id = "task-checkbox";
    taskCheckbox.value ="";
    taskItem.append(taskCheckbox);
    
    const taskTextfield = document.createElement("p");
    taskTextfield.id = "task-textfield";
    taskTextfield.textContent =taskText;
    taskItem.append(taskTextfield);
    
    return taskItem;
}