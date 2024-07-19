class Todo{
    constructor(Title,Desc,Date,Priority){
     this.Title=Title;
     this.Desc=Desc;
     this.Date=Date;
     this.Priority=Priority;
    }
 
    getTitle(){
     return this.Title;
    }
 
    getDesc(){
     return this.Desc;
    }
 
    getDate(){
     return this.Date;
    }
 
    getPriority(){
     return this.Priority;
    }
  }
  
 const headerText = document.querySelector(".headerText")
 
 const Home = document.querySelector(".home")
 
 const Today= document.querySelector(".today")
 
 const Week = document.querySelector(".week")
 
 const addProject = document.querySelector(".AddProject")
 
 const closeProjectBTN = document.querySelector(".projectcloseBTN")
 
 const addProjectBTN = document.querySelector(".projectaddBTN")
 
 const AddedProjectsContainer = document.querySelector(".AddedProjectsContainer")
 
  
 
 const AddTask = document.querySelector(".AddTaskContainer")
 
 const modal = document.querySelector(".Modal")
     modal.style.display="none"
     
 const modalAddTask = document.querySelector(".modalAddTask")
     
 const CloseModalBTN = document.querySelector(".modalClose")
 
 const modalReset = document.querySelector(".modalReset")
 
 const allTasksContainer = document.querySelector(".AllTasksContainer")
 
 const TaskContainer = document.querySelector(".TaskContainer")
 
 const leftSide = document.querySelector(".LeftSide")
 
 const rightSide = document.querySelector(".RightSide")
 
 const TitleAndDesc = document.querySelector(".TitleAndDesc")
 
 const deleteTask = document.querySelector(".deleteTask")
 
 const editTask = document.querySelector(".editTask")
 
 const ProjectTasksContainerArray=[]
  
 
  
 
   
 
 addProject.addEventListener("click",()=>{
      
      document.querySelector(".AddNewProjectInput").style.visibility="visible"
 
 })
 
 
 closeProjectBTN.addEventListener("click",()=>{
     document.querySelector(".AddNewProjectInput").style.visibility="hidden"
 })
 
 
 addProjectBTN.addEventListener("click",()=>{
     if(document.querySelector(".addprojectInput").value===""){
          //Do nothing
     }
 
     else{
         newProject(document.querySelector(".addprojectInput").value)
     }
 })
 
 
 
 Home.addEventListener("click",()=>{
     headerText.textContent="All Tasks"
     allTasksContainer.style.display=""
     document.querySelector(".AddTaskContainer").style.display=""
 })
 
 Today.addEventListener("click",()=>{
     headerText.textContent="Today"
     allTasksContainer.style.display="none"
     document.querySelector(".AddTaskContainer").style.display="none"
     
 })
 
 Week.addEventListener("click",()=>{
     headerText.textContent="This Week"
     allTasksContainer.style.display="none"
     document.querySelector(".AddTaskContainer").style.display="none"
 })
 
 
 
 //The three Modal buttons
 AddTask.addEventListener("click",()=>{
     modal.style.display=""
     
 })
 
 
 CloseModalBTN.addEventListener("click",()=>{
     modal.style.display="none"
 })
 
 modalReset.addEventListener("click",()=>{
     document.querySelector(".modalTitle").value="";
     document.querySelector(".modalDesc").value="";
     document.querySelector(".modalDate").value="";
     document.querySelector(".Low").checked=true;
 })
 //The three Modal buttons
 
 
 
 
 
 //The task container delete and edit buttons
 deleteTask.addEventListener("click",()=>{
     TaskContainer.remove()
  })
 
   
 
  
  //The task container delete and edit buttons
 
 
 
 modalAddTask.addEventListener("click",()=>{
     modal.style.display="none"
     const modalTitle = document.querySelector(".modalTitle").value
     const modalDesc = document.querySelector(".modalDesc").value
     const modalDate = document.querySelector(".modalDate").value
     const Priority = checkPriority()
     const newToDo = new Todo(modalTitle,modalDesc,modalDate,Priority) 

     
     AddNewToDo(newToDo)
 })
 
 
 
 function newProject(projectName){
     const ProjectTaskContainer=document.createElement("div")
        ProjectTaskContainer.classList.add("AllTaskContainer")
 
        ProjectTasksContainerArray.push(ProjectTaskContainer)
 
 
         let x=0;
     
     const ProjectContainer = document.createElement("div")
     ProjectContainer.classList.add("projectContainer")
     AddedProjectsContainer.appendChild(ProjectContainer)
 
     const projectLeft = document.createElement("div")
           projectLeft.classList.add("Left")
           ProjectContainer.appendChild(projectLeft)
     
 
 const tag = document.createElement("img")
     tag.src="./pound.svg";
 
 const projectname = document.createElement("div")
     projectname.textContent=`${projectName}`
 
 const projectDelete = document.createElement("img")
       projectDelete.src="./close.svg"
 
     projectLeft.appendChild(tag)
     projectLeft.appendChild(projectname)
     ProjectContainer.appendChild(projectDelete)
 
 
     ProjectContainer.addEventListener("click",()=>{
         if(x===0){
         allTasksContainer.style.display="none"
         ProjectTaskContainer.style.display=""
         headerText.textContent=projectName
         }
         else if(x===1){
             allTasksContainer.style.display=""
             headerText.textContent="All Tasks"
         }
     })
 
    projectDelete.addEventListener("click",()=>{
     x+=1
     ProjectContainer.remove()
     ProjectTaskContainer.remove()
     ProjectTasksContainerArray.pop(ProjectTaskContainer)
     allTasksContainer.style.display=""
     headerText.textContent="All Tasks"
    })
     
 
 
 
 }
 
 
 
 
 
 function AddNewToDo(toDO){
     const newTaskContainer = document.createElement("div")
           newTaskContainer.classList.add("TaskContainer")
 
     
     const newLeftSide = document.createElement("div")
           newLeftSide.classList.add("LeftSide");
           newTaskContainer.appendChild(newLeftSide)
 
     const checkBox = document.createElement("INPUT")
         checkBox.setAttribute("type", "checkbox");
         newLeftSide.appendChild(checkBox)
 
     const newTitleAndDesc = document.createElement("div")
           newTitleAndDesc.classList.add("TitleAndDesc")
           newLeftSide.appendChild(newTitleAndDesc)
 
     const newTaskTitle = document.createElement("div")
           newTaskTitle.classList.add("TaskTitle")
           newTaskTitle.textContent=`${toDO.Title}`
 
     const newTaskDesc = document.createElement("div")
           newTaskDesc.classList.add("TaskDesk")
           newTaskDesc.textContent=`${toDO.Desc}`
 
           newTitleAndDesc.appendChild(newTaskTitle)
           newTitleAndDesc.appendChild(newTaskDesc)
 
 
     const newRightSide = document.createElement("div")
         newRightSide.classList.add("RightSide")
         newTaskContainer.appendChild(newRightSide)
 
         
     const newDate = document.createElement("div")
           newDate.classList.add("TaskDate")
           newDate.textContent=`${toDO.Date}`
           newRightSide.appendChild(newDate)
     
     const newEdit = document.createElement("img")
          newEdit.classList.add("editTask")
          newEdit.src="./edit.svg"
          newRightSide.appendChild(newEdit)
 
     const newDelete = document.createElement("img")
         newDelete.classList.add("deleteTask")
         newDelete.src="./trash.svg"
         newRightSide.appendChild(newDelete)
        
         if(toDO.Priority==="low"){
             newTaskContainer.classList.remove("Low","Medium","High")
             newTaskContainer.classList.add("Low")
      
          }
     
          if(toDO.Priority==="medium"){
             newTaskContainer.classList.remove("Low","Medium","High")
             newTaskContainer.classList.add("Medium")
      
          }
     
          if(toDO.Priority==="high"){
             newTaskContainer.classList.remove("Low","Medium","High")
             newTaskContainer.classList.add("High")
          }
 
 
          newDelete.addEventListener("click",()=>{
             newTaskContainer.remove()
          })
          
  
         allTasksContainer.appendChild(newTaskContainer) //here write the code to append the task to other projects container later
         
 }
 
  
 
 function checkPriority(){
     const LowPriority = document.querySelector(".Low1")
     const MediumPriority = document.querySelector(".Medium1")
     const HighPriority = document.querySelector(".High1")
 
 
 
     if(LowPriority.checked){
         return "low"
     }
 
     if(MediumPriority.checked){
         return "medium"
     }
 
     if(HighPriority.checked){
         return "high"
     }
 }
 
 
 console.log(ProjectTasksContainerArray)