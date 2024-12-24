let tasks = [];
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
        let content = document.querySelector('.content')
        content.innerHTML += formData;
       
      
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
            
        })


    }
    

    

    return{
        addForm,getFormData,
    }
}

export {formRelated,tasks};