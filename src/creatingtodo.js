import {toDoFactory} from "./factoryfunctions";


let toDoArray = [];


const add = function(){
    
    const addbtn = document.querySelector(".addbtn");
    addbtn.addEventListener("click",function(){
        console.log("Adding a to do"); 
        
        //Bring up a modal where user can input todo or notes or whatever
        
        // const todo = toDoFactory("Study","I have to study at 4pm", "today");
        //                           the todo fields, then due date
       //push into array whatever user inputs

       //create elements for each todo and also delete button for each todo
       //add into array or delete from array
})

}


export{add};



// console.log(todo);
// todo.priority();