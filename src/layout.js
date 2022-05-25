

//page layout


const layout = function(){

     //getting elements from index.html
    const header = document.getElementById("header");
    const sidebar = document.getElementById("sidebar");


    //create headertitle
    const headerTitle = document.createElement("h1");
    headerTitle.className = "headertitle";
    headerTitle.textContent = "toDoNotes";

    header.append(headerTitle);

     //making a sidebar navigation for lists and main content section for viewing CRUD the lists and notes
    const aside = document.createElement("aside");
    aside.className = "aside";


    const main = document.createElement("main");  
    main.className = "main";
    main.innerHTML ="main";


    sidebar.append(aside,main);
    
    const nav = document.createElement("div");
    nav.className = "nav"
    const addbtn  = document.createElement("div");
    addbtn.className ="addbtn";
    addbtn.innerHTML = "+";

    const homebtn = document.createElement("h3");
    homebtn.innerHTML = "Home"
    const todaybtn = document.createElement("h3");
    todaybtn.innerHTML = "Today";
    const notesbtn = document.createElement("h3");
    notesbtn.innerHTML = "Notes";
    
    const mainContent = document.createElement("h1");
    mainContent.className = "maincontent";
    mainContent.textContent = "Homepage";
    main.appendChild(mainContent);

    
    
    aside.append(nav,addbtn);
    nav.append(homebtn,todaybtn,notesbtn);


    todaybtn.addEventListener("click",function(){
        mainContent.textContent = "Today";
    })
    homebtn.addEventListener("click",function(){
        mainContent.textContent = "Homepage";
    })
    notesbtn.addEventListener("click",function(){
        mainContent.textContent = "Notes";
    })


   


}



export{layout};