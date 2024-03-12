// Code by incredible_prog
//ToDo App
const titleInput = document.getElementById("taskTitle")
const dayTimeInput = document.getElementById("dayTime")
const addBtn = document.getElementById("addBtn")
const form = document.getElementById("formDisplay")
const notask = document.getElementById("noTask")
const savedTasksBox = document.querySelector(".savedTasks")
const reminder = document.getElementById("reminder")
let formDisplayed = false
let tasks = []


class Todo{
    constructor(title, dayTime) {
        this.title = title
        this.dayTime = dayTime
    }
}
addBtn.onclick = ()=>{
    if (!formDisplayed){

        //display the form content
        form.style.display = "block"
        
        //change background color and text to close
        addBtn.style.backgroundColor = "hsl(0, 90%, 54%)"
        addBtn.textContent = "Close"
        //hide the form display
        formDisplayed = true
        
        
    } else{
        form.style.display = "none"
        formDisplayed = false
        addBtn.style.backgroundColor = "hsl(113, 87%, 21%)"
        addBtn.textContent = "Add"
        notask.style.display = "block"

    }
    
    

    // console.log("add button clicked!")
}



const saveTask = () => {
    //create a new object
    const task = new Todo(titleInput.value, dayTimeInput.value)
    tasks.push(task)
    titleInput.value = ""
    dayTimeInput.value = ""
    // console.log(tasks)

    //hide no tasks dislpay
    notask.style.display = "none"
    displayTasks(task)
    // console.log(tasks)
}

const displayTasks = (task) => {
    //check if there exists some tasks
    //loop over the tasks
    //create a new taskitem element
    const taskItem = document.createElement('div')
    taskItem.className = "task"
    taskItem.id =  `${tasks.indexOf(task)}`
    // taskItem.style.borderLeft = "10px solid"
    taskItem.innerHTML = `<span id="title">${task.title}</span>
    <button id="deleteBtn" onclick="deleteTask(${tasks.indexOf(task)})">Delete</button><br/>
    <span class="discription">${task.dayTime}</span>`
    savedTasksBox.prepend(taskItem)
    //you can use appendChild to add the item after the last item/ buttom

    //reomve the current item from the lists after displaying
    // tasks.pop(item)
    // console.log(tasks)
}

const deleteTask = (index) =>{
    tasks.pop(tasks[index])
    let deletedTask = document.getElementById(`${index}`)
    deletedTask.style.display = "none"
    if (tasks.length === 0){
        notask.style.display = "block"
    }
    // console.log(tasks)
}