import "./styles.css";
import "./dom.js"
// import {tasks} from "./.js"
import { projectRelated, taskRelated, updateDom,clickExitButton,projectContainer,tasks}from "./dom.js";
// import { projectRelated } from "./project.js";

// let formFunctions = formRelated();
// let projectFunctions = projectRelated();
// // formFunctions.changeDom();
// 
let projectTitleInput = document.getElementById('projectTitleInput');
const addTaskBtn = document.getElementById('addTask');
let formFunctions = taskRelated();
let projectFunctions = projectRelated();
let updateFunctions = updateDom();
updateFunctions.projectTabs();
updateFunctions.taskCards();
// listen to clickes of taskButtons

const addProjectBtn = document.getElementById('addProject');

addProjectBtn.addEventListener('click',()=>{
   
   projectFunctions.displayProjectInput();
   clickExitButton(projectContainer)
   document.getElementById('projectTitleSumbit').addEventListener('click',()=>{
        takeAndStoreInput();
   });
})


addTaskBtn.addEventListener('click',()=>{
    formFunctions.addTaskForm();
    document.querySelector('.task-button').addEventListener('click',()=>{
        console.log('Hello');
        storeTaskData();
    });
    clickExitButton(contentForm);
});




//For later Project on fixing textarea rows

/*
let textarea =document.getElementById('description');
textarea.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        console.log('Enter key pressed');
    }
}); */

let contentForm = document.querySelector('.form-container');
if(contentForm.innerHTML !==""){
    console.log('Hello1');
}


    function storeTaskData(){
        let title= document.getElementById('title').value;
        let description= document.getElementById('description').value;
        let date= document.getElementById('date').value;
        let select = document.getElementById('selectProject')
        let project= select[select.selectedIndex].value
            console.log(project);
            let objectInput={
                title,description,date,
            }
            
            let task = tasks[project];
            console.log(tasks);
            task[title]= objectInput;       
            contentForm.innerHTML = "";
    }