
function formRelated(){
    let formData = `

    <form id="taskForm">
    <input type="text" name="title" id="title" placeholder="Title" required>
    <textarea name="description" id="description" placeholder="Description" rows="2"></textarea>
    <input type="date" id="date" required>
    <button type="button"  id="addTaskBtn">Add Task</button>
    </form>

`;

    function addForm(params) {
        document.querySelector('.content').innerHTML += formData;
        let addButton = document.getElementById('addTaskBtn');
        addButton.addEventListener('click', () => {
            console.log("hello");
        });
      
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