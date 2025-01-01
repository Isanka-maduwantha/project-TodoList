import "./styles.css";
import "./dom.js"

import { projectRelated,taskRelated,updateDom,clickExitButton,emptyInnerHtml,contentForm,projectContainer,taskContainer,tasks} from "./dom.js";


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
   
   document.getElementById('projectTitleSumbit').addEventListener('click',()=>{

        takeAndStoreInput();
   });
   clickExitButton(projectContainer);
  
})
function takeAndStoreInput(){
    let projectTitleInput = document.getElementById('projectTitleInput');
    let title = projectTitleInput.value;
    console.log(title);
    addProject(title,tasks);
    emptyInnerHtml(projectContainer);
   
        function addProject(projectValue,object=tasks){
            console.log(projectValue)
            object[projectValue] ={
            project:projectValue,
            }
        }
    }

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
            task[title]= objectInput;  
            console.log(tasks);    
            emptyInnerHtml(contentForm);
  
    }

