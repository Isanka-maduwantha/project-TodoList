import { newform,addForm } from "./form";
let tasks = {}
document.getElementById("addTaskBtn").addEventListener('click',(event)=>{
    event.preventDefault();
    // console.log("clicked");
    let newTask = task();
    tasks[newTask.task.title] = newTask;
    newTask.changeDom(newTask.task.title)
});

function task(){
    let task ={
        title : document.getElementById("title").value,
        description : document.getElementById("description").value,
        date : document.getElementById('date').value

    }

    function changeDom(title){
        let taskTitle = tasks[title].task;
     
        document.querySelector('body').innerText = `${taskTitle.title}
        ${taskTitle.description}${taskTitle.date}`

    }

    return {task,changeDom};

}

document.querySelector('.addBtn').addEventListener('click',()=>{
    addForm();
})