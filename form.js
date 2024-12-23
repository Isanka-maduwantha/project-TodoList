
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
        document.querySelector(".task-button").addEventListener('click',()=>{
            
            window.alert("hello");
        })
      
    };
    function takeFormData(params) {

 

 

        
    };
    function storeFormData(dataObject,storeArray) {
        storeArray.push(dataObject);
    };
    

    return{
        addForm,takeFormData,storeFormData,
    }
}

export {formRelated};