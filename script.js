
import {formRelated,tasks} from "./form.js"

let formFunctions = formRelated();

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',()=>{
    addBtn.style="display:none";
    formFunctions.addForm();
    formFunctions.getFormData();
    
    

})




//For later Project on fixing textarea rows

/*
let textarea =document.getElementById('description');
textarea.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        console.log('Enter key pressed');
    }
}); */

