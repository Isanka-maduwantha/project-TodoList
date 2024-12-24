let tasks = {};
    tasks.defaultProject = {
            name:"defaultProject",

           Wakeup :{
                date:"2024.12.30",
                description:"",
                title: "WakeUp"   
            },
           "Brush Teeth": {
                date:"2024.12.25",
                description:"",
                title: "Brush Teeth"
            },
    }
    tasks.new = {
        name:"new",

       Wakeup :{
            date:"2024.12.30",
            description:"",
            title: "WakeUp"   
        },
       "Brush Teeth": {
            date:"2024.12.25",
            description:"",
            title: "Brush Teeth"
        },
}
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
        let taskContainer = document.querySelector('.task-container');
        taskContainer.innerHTML =`<li class="todo-title"><span class="title-main">Title</span><span class="title-date">Due Date</span></li>`;

        
        Object.values(tasks).forEach((Key)=>{
            console.log(Key.name);
            let name = Key.name;
            Object.values(Key).forEach((task,index)=>{

                if(index===0){
                    console.log(task);
                    taskContainer.innerHTML+=`<div class="boxTodo ${task}" ><h1>${task}</h1></div>`;
                }
                else{
                       let num = index-1;
                    document.querySelector(`.${name}`).innerHTML+=`
                    <li class="todo-item"><span class="title"><input type="radio" name="" id="">${task.title}</span><span class="date">${task.date}</span></li>
                       `;
                }
             
            })
        })
    }    

    

    return{
        addForm,getFormData,changeDom
    }
}

export {formRelated,tasks};