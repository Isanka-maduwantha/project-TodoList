const newform = `    <form action="#
    ">
    <input type="text" name="title" id="title" placeholder="Title" required>
    <textarea name="description" id="description" placeholder="description" rows="5"></textarea>
    <input type="date" id="date" required>
<button id="addTaskBtn">add task</button>
</form>`

function addForm(){
    document.querySelector('body').innerHTML = newform;
}
export {addForm};