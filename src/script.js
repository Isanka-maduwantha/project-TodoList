import "./styles.css";

import {formRelated,tasks} from "./form.js"
import { projectRelated } from "./project.js";

let formFunctions = formRelated();
let projectFunctions = projectRelated();
// formFunctions.changeDom();
const addTaskBtn = document.getElementById('addTask');
const addProjectBtn = document.getElementById('addProject');
addTaskBtn.addEventListener('click',()=>{
    formFunctions.addForm();
    formFunctions.getFormData();
    
    let contentForm = document.querySelector('.form-container');
document.querySelector('.exit').addEventListener('click',()=>{
    contentForm.innerHTML = "";
    
})
    

})
addProjectBtn.addEventListener('click',()=>{
   
   projectFunctions.projectInput();
   projectFunctions.takeAndStoreInput();

   
   document.querySelector(".exit").addEventListener('click',()=>{
    document.querySelector(".project-container").innerHTML="";})


  

})




//For later Project on fixing textarea rows

/*
let textarea =document.getElementById('description');
textarea.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        console.log('Enter key pressed');
    }
}); */

