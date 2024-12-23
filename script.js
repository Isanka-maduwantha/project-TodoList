// // import {formRelated} from '/form.js';
import {formRelated} from "./form.js"
let tasks = [];
let formFunctions = formRelated();


document.getElementById('addBtn').addEventListener('click',()=>{
    console.log(formFunctions.addForm());
    formFunctions.addForm();
 

})

// // formFunctions.takeFormData();
// let addButton = document.getElementById('addTaskBtn');
// addButton.addEventListener('click',()=>{
//     console.log("hello");

//     // let formReturns= formFunctions.takeFormData();
//     // console.log(formReturns)
     
// })



// formFunctions.storeFormData(formReturns,tasks);
// console.log(tasks)

//For later Project on fixing textarea rows

/*
let textarea =document.getElementById('description');
textarea.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        console.log('Enter key pressed');
    }
}); */

