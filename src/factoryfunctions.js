
//to do factory that returns a todo object
const toDoFactory  = function(title,description,duedate){ 

   return{
       title,
       description,
       duedate,

       priority(){
         console.log("I am a priority")  
       }
   }
}





//notes factory
const notesFactory = function( ){

    return{
        title,
        text,
    }
}


export{toDoFactory};