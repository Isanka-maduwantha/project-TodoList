import { tasks } from "./tasks";
function projectRelated(){
    let inputElement = `<input type="text" id="projectTitleInput" class="project-title" placeholder="Project Title"><button class="project-title_submit-button" id="projectTitleSumbit">+</button>`;

    function addProject(projectValue="pro",object){
        console.log(projectValue)
        object[projectValue] ={
            projectValue,
        }
    }
    function projectInput(){
        let projectContainer =document.querySelector(".project-container");
        projectContainer.innerHTML="";
        projectContainer.innerHTML += inputElement;
        document.getElementById("projectTitleInput").focus();




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


    return {addProject,projectInput,takeAndStoreInput}
}
export {projectRelated};

