import{tasks} from "./tasks"
let htmlContents = {

    form : `    <form id="taskForm">
        <span class="exit-container"><span class="exit"> </span></span>
        <input type="text" name="title" id="title" placeholder="Title" required>
        <textarea name="description" id="description" placeholder="Description" rows="2"></textarea>
        <input type="date" id="date" required>
        <select id="selectProject" required>
            
        </select>
        <button type="button"  class="task-button" id="addTaskBtn">Add Task</button>
        </form>`,
    
    inputProjectTitle :`<input type="text" id="projectTitleInput" class="project-title" placeholder="Project Title">
    <div class="action-buttons">
        <span class="exit-container">
            <span class="exit project-exit"> Cancel</span>
        </span>
        <button class="project-title_submit-button" id="projectTitleSumbit">Add Project</button>
    </div>`,

}
// All Globally Needed Html Elements
let contentForm = document.querySelector('.form-container');
let projectContainer =document.querySelector(".project-container");
let taskContainer = document.querySelector('.task-container');
// Normal Functions

// function to making innerHTML = "" or add newValue in any element
function makeInnerUpdate(element,newValue=""){
    // let element = document.querySelector(elementClass);
    if(element === undefined){
        return undefined;
    }
    else{
        element.innerHTML=newValue;
    }

};
// function to consolelog
function consoleLog(value){
    console.log(value);
};
// add options inside select or any element by looping through object 
function addElements(obj,value,element="option",elementCls=""){
    Object.values(obj).forEach((Key)=>{
        document.getElementById(value).innerHTML+=`<${element} class="${elementCls}">${Key.project}</${element}>`
    });
}
// add tasks inside taskContainer by looping through object
function addTaskElements(key,name){
    Object.values(key).forEach((task,index)=>{
        if(index===0){

            taskContainer.innerHTML+=`<div class="boxTodo ${name}" ><h3>${name}</h3></div>`;
        }
        else{
            document.querySelector(`.${name}`).innerHTML+=`
            <li class="todo-item"><span class="title"><input type="radio" name="" id="">${task.title}</span><span class="date">${task.date}</span></li>`;
        }
     
    })
}
// fuction when exit button clicked
function clickExitButton(element){
    document.querySelector(".exit").addEventListener('click',()=>{
        makeInnerUpdate(element);
       });
}
// FactoryFunctions

// factory function on all dom related in projects
function projectRelated(){

    function displayProjectInput(){
        makeInnerUpdate(projectContainer);
        projectContainer.innerHTML += htmlContents.inputProjectTitle;
        document.getElementById("projectTitleInput").focus();
    }


    return {displayProjectInput,}
}
// factory function on all dom related in Tasks
function taskRelated(){
    function addTaskForm() {
        // adding a form to get task details
        makeInnerUpdate(contentForm,htmlContents.form);
        consoleLog(tasks);
        // add options to select using function
        addElements(tasks,'selectProject');

      
    };

 
    return{
        addTaskForm,
    }
}

function updateDom(){
    function projectTabs(){
        addElements(tasks,'projectTabs','button','project-tab');
    }
    function taskCards(){
       
        makeInnerUpdate(taskContainer);
        displayTasks('All');
        document.querySelectorAll('.project-tab').forEach((tab)=>{
            tab.addEventListener('click',()=>{
                displayTasks(tab.textContent);
            })
        })
        function displayTasks(text){
            if(text === 'All'){
                makeInnerUpdate(taskContainer);
                Object.values(tasks).forEach((key)=>{
                    let name = key.project;
                    
                        consoleLog(name+" "+text);
                        addTaskElements(key,name,text);
                })   
            }
            else{

                Object.values(tasks).forEach((key)=>{
                    
                    let name = key.project;
                    if(name === text){
                        consoleLog(name+" "+text);
                        makeInnerUpdate(taskContainer);
                        addTaskElements(key,name);
                    }
                })
            }

        }
    } 
    return{
        projectTabs,taskCards,
    }  
}
export{projectRelated,taskRelated,updateDom,clickExitButton,contentForm,projectContainer,taskContainer}