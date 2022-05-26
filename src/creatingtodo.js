import {toDoFactory} from "./factoryfunctions";


let toDoArray = [];




const add = function(){
    
    
    

    const todoInput = document.querySelector(".todo");
    const description = document.querySelector(".description");
    const duedateInput = document.querySelector(".duedate");
    const newtodobtn = document.querySelector(".addtodo");
    const modal = document.querySelector(".modal");


    newtodobtn.addEventListener("click",function(){


        
        const newTodo = toDoFactory(todoInput.value,duedateInput.value);
        console.log(newTodo);
        
        modal.style.display = "none";
        todoInput.value = "";
   
        duedateInput.value = "";
        toDoArray.push(newTodo);
        console.log(toDoArray);

        renderToDo();
          
    })

}
function forToday(){

  let results = toDoArray.filter( todo => todo.duedate == "today");
  console.log(results);



//   for(let i = 0 ; i < results.length; i++){
//       CreateToDo(results[i]);
//   }
}


function renderToDo(){
    const todolist = document.querySelector(".todolist");
    const todos = document.querySelectorAll(".mytodo");
    todos.forEach(newTodo => todolist.removeChild(newTodo));

    
    for (let i=0; i < toDoArray.length; i++){
        CreateToDo(toDoArray[i]);
    }

}

function CreateToDo(todo){
    
    const todolist = document.querySelector(".todolist");
    const tododiv = document.createElement("div");
    todolist.append(tododiv);

    const todoname = document.createElement("p");
    // const tododescription = document.createElement("p");
    const tododue = document.createElement("p");
    const trashtodo =document.createElement("button");

    
      tododiv.setAttribute("id",toDoArray.indexOf(todo))

        todoname.textContent = todo.title;
        // tododescription.textContent = todo.description;
        tododue.textContent = todo.duedate;
        trashtodo.innerHTML = "Remove";
        
        tododiv.classList.add("mytodo");
        todoname.classList.add("mytodoname");
        // tododescription.classList.add("tododescription");
        tododue.classList.add("tododuedate");
        trashtodo.classList.add("trashtodo");

        trashtodo.addEventListener("click",function(){
            toDoArray.splice(toDoArray.indexOf(todo),1);
            renderToDo();
        })


        
       tododiv.append(todoname,tododue,trashtodo);
    

}


export{add,forToday};



