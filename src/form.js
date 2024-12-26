import{tasks} from "./project.js"
function formRelated(){
    let formData = `

    <form id="taskForm">
    <span class="exit-container"><span class="exit"> </span></span>
    <input type="text" name="title" id="title" placeholder="Title" required>
    <textarea name="description" id="description" placeholder="Description" rows="2"></textarea>
    <input type="date" id="date" required>
    <select id="selectProject" required>
        
    </select>
    <button type=""  class="task-button" id="addTaskBtn">Add Task</button>
    </form>

`;

    function addForm() {
        let contentForm = document.querySelector('.form-container');
        contentForm.innerHTML = formData;
        console.log(tasks);
        Object.values(tasks).forEach((Key)=>{
            
            document.getElementById('selectProject').innerHTML+=`<option>${Key.project}</option>`
            // let name = Key.project;
        });
        



        
       
      
    };
    function getFormData(){
        let title;
        let description;
        let date;
        let project;
        document.querySelector(".task-button").addEventListener('click',function(event){
            // event.preventDefault();
            document.getElementById('taskForm')
            title= document.getElementById('title').value;
            description= document.getElementById('description').value;
            date= document.getElementById('date').value;
            let select = document.getElementById('selectProject')
            
            project= select[select.selectedIndex].value
            
          
            let objectInput={
                title,description,date,project,
            }
            
          let task = tasks[objectInput.project]
          task[objectInput.title]= objectInput;

            console.log(tasks);
            
            let contentForm = document.querySelector('.form-container');
            contentForm.innerHTML = "";
           
            
            
        })
        



    }
    function changeDom(){
        let taskContainer = document.querySelector('.task-container');
        taskContainer.innerHTML ="";
        
        
        Object.values(tasks).forEach((Key)=>{
            
            // let name = Key.project;
            // document.getElementById('selectProject').innerHTML=`<option>${name}</option>`;
            // console.log(name)
            Object.values(Key).forEach((task,index)=>{

                // if(index===0){
                //     console.log(task);
                //     taskContainer.innerHTML+=`<div class="boxTodo ${name}" ><h3>${name}</h3></div>`;
                // }
                // else{
                    
                //     document.querySelector(`.${name}`).innerHTML+=`
                //     <li class="todo-item"><span class="title"><input type="radio" name="" id="">${task.title}</span><span class="date">${task.date}</span></li>
                //        `;
                // }
             
            })
        })
    }    

    

    return{
        addForm,getFormData,changeDom
    }
}

export {formRelated,tasks};