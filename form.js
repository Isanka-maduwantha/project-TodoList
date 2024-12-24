let tasks = [{
    date:"",
    description:"",
    title: "WakeUp"
    },
    {
        date:"2024.12.30",
        description:"",
        title: "WakeUp"   
    },
    {
        date:"2024.12.25",
        description:"",
        title: "Brush Teeth"
    }

];
function formRelated(){
    let formData = `

    <form id="taskForm">
    <input type="text" name="title" id="title" placeholder="Title" required>
    <textarea name="description" id="description" placeholder="Description" rows="2"></textarea>
    <input type="date" id="date" required>
    <button type="button"  class="task-button" id="addTaskBtn">Add Task</button>
    </form>

`;

    function addForm() {
        let contentForm = document.querySelector('.form-container')
        contentForm.innerHTML += formData;
       
      
    };
    function getFormData(){
        let title;
        let description;
        let date;
        document.querySelector(".task-button").addEventListener('click',function(){
            // preventDefault();
            document.getElementById('taskForm')
            title= document.getElementById('title').value;
            description= document.getElementById('description').value;
            date= document.getElementById('date').value;
            let objectInput={
                title,description,date,
            }
            tasks.push(objectInput);
            console.log(tasks);
            let contentForm = document.querySelector('.form-container')
            contentForm.innerHTML = "";
            changeDom()
            
        })



    }
    function changeDom(){
        let taskContainer = document.querySelector('.task-container')
        taskContainer.innerHTML ="";
        tasks.forEach((task)=>{
             taskContainer.innerHTML+=`
         <li class="todo-item"><span class="title"><input type="radio" name="" id="">${task.title}</span><span class="date">${task.date}</span></li>
            `
        })
    }    

    

    return{
        addForm,getFormData,changeDom
    }
}

export {formRelated,tasks};