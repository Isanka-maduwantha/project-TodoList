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
function emptyInnerHtml(element,newValue=""){
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
    if(value===undefined){
        return false;
    }
    // console.log(value);
};
// add options inside select or any element by looping through object 
function addElements(obj,value,element="option",elementCls=""){
        value = document.getElementById(value);
    Object.values(obj).forEach((Key)=>{
        value.innerHTML+=`<${element} class="${elementCls}">${Key.project}</${element}>`
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
            <li class="todo-item"><span class="title"><input type="checkbox" name="${task.title}" class="tick"><span class="task-title">${task.title}</span></span><span class="date">${task.date}</span></li>`;
        }
     
    })
    
}
// fuction when exit button clicked
function clickExitButton(element){
    document.querySelector(".exit").addEventListener('click',()=>{
        emptyInnerHtml(element);
       });
}
// add line through to an element
function lineThrough(elementClass,toggle=1){
    let element = document.querySelector(`${elementClass}`);
    if(element.innerHTML!==""){
        if(toggle === 0){
            element.classList.add('line-through');
        }
        else if(toggle === 1){
            element.classList.toggle('line-through')  
        }
    }


}
// FactoryFunctions

// factory function on all dom related in projects
function projectRelated(){

    function displayProjectInput(){
        emptyInnerHtml(projectContainer);
        projectContainer.innerHTML += htmlContents.inputProjectTitle;
        document.getElementById("projectTitleInput").focus();
    }


    return {displayProjectInput,}
}
// factory function on all dom related in Tasks
function taskRelated(){
    function addTaskForm() {
        // adding a form to get task details
        emptyInnerHtml(contentForm,htmlContents.form);
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
        document.getElementById('projectTabsGenarated').innerHTML="";
        addElements(tasks,'projectTabsGenarated','button','project-tab');
        taskCards();
        taskComplete();
    }
    function taskCards(){
       
        emptyInnerHtml(taskContainer);
        displayTasks('All');
        document.querySelectorAll('.project-tab').forEach((tab)=>{
            tab.addEventListener('click',()=>{
                displayTasks(tab.textContent);
                taskComplete();
            })
        })
        function displayTasks(text){
            if(text === 'All'){
                emptyInnerHtml(taskContainer);
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
                        emptyInnerHtml(taskContainer);
                        addTaskElements(key,name);
                    }
                })
            }
 
        }
    } 
    
    function taskComplete(){
       let checkbox = document.querySelectorAll('.tick')
       checkbox.forEach((tick)=>{
            completed(tick);


        });


    }
    function completed(tick){
        let name =tick.nextSibling.textContent;
        let projectValue = tick.parentElement.parentElement.parentElement.children[0].textContent;
        let project = tasks[projectValue][name];
        let  status ; 
       
        if(project.complete === true){
            
            tick.checked = true;
            checkStyle('add');
            
        }
        tick.addEventListener('click',()=>{
            checkStyle('add');
            
            status = true;
            if(tick.checked===false){
                tick.checkbox = false;
                status = false;
                checkStyle('remove')
            }
            project.complete = status;

        console.log(project.complete);
        });


        
        function checkStyle(action){
            if(action === 'add'){
                tick.classList.add('completed');
                tick.parentElement.nextSibling.classList.add('line-through');
                tick.nextSibling.classList.add('line-through');
                tick.parentElement.parentElement.classList.add('completeBg');
            }
            else if(action === 'remove'){
                tick.classList.remove('completed');
                tick.parentElement.nextSibling.classList.remove('line-through');
                tick.nextSibling.classList.remove('line-through');
                tick.parentElement.parentElement.classList.remove('completeBg');
            }

        }
    }
    return{
        projectTabs,taskCards
    }  
}
export{projectRelated,taskRelated,updateDom,clickExitButton,emptyInnerHtml,contentForm,projectContainer,taskContainer,tasks}