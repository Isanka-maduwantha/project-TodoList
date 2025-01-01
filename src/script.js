import "./styles.css";
import "./dom.js"
import {tasks} from "./tasks.js"
import { projectRelated, taskRelated, updateDom,clickExitButton,projectContainer } from "./dom.js";
// import { projectRelated } from "./project.js";

// let formFunctions = formRelated();
// let projectFunctions = projectRelated();
// // formFunctions.changeDom();
// 

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


})


addTaskBtn.addEventListener('click',()=>{
    formFunctions.addTaskForm();
    clickExitButton(contentForm);
    

})




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
    document.querySelector('.task-button').addEventListener('click',()=>{
        console.log('Hello');
    })
    // getFormData();

}


    function getFormData(){
        let title;
        let description;
        let date;
        let project;
        document.querySelector(".task-button").addEventListener('click',function(event){
            // event.preventDefault();
            console.log('clicked')
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
            
            
            contentForm.innerHTML = "";
           
            
            
        })
        



    }

    function addProject(projectValue="pro",object){
        console.log(projectValue)
        object[projectValue] ={
            project:projectValue,
        }
    }
        function takeAndStoreInput(){
     
    
            let projectContainer =document.querySelector(".project-container");
            let projectTitleInput = document.getElementById('projectTitleInput');
            document.getElementById('projectTitleSumbit').addEventListener('click',()=>{
    
                let title = projectTitleInput.value;
                projectContainer.innerHTML="";
                console.log(tasks);
                addProject(title,tasks);
            
    
            })
        }