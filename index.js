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
    for(let i=0;i<ProjectTasksContainerArray.length;i++){
        ProjectTasksContainerArray[i].style.display="none"
    }
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

    const ProjectTaskContainer = document.createElement("div")
        ProjectTaskContainer.classList.add("AllTasksContainer")
        ProjectTaskContainer.style.display="none"
        document.querySelector(".AfterSideBar").appendChild(ProjectTaskContainer)


    ProjectContainer.addEventListener("click",()=>{
        for(let i=0;i<ProjectTasksContainerArray.length;i++){
            ProjectTasksContainerArray[i].style.display="none"
        }
        ProjectTaskContainer.style.display=""
        headerText.textContent=projectName
        allTasksContainer.style.display="none"
 
    })

    projectDelete.addEventListener("click",()=>{
        ProjectContainer.remove()
        ProjectTaskContainer.remove()
        allTasksContainer.style.display=""
        headerText.textContent="All Tasks"
    })

    
     
 
 
 ProjectTasksContainerArray.push(ProjectTaskContainer)
 }
 
 
 
 
 
 function AddNewToDo(toDO){
     const newTaskContainer = document.createElement("div")
           newTaskContainer.classList.add("TaskContainer")

    const AllTaskNewTask=document.createElement("div")
          AllTaskNewTask.classList.add("TaskContainer")

    
     
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
        

    const AllnewLeftSide = document.createElement("div")
         AllnewLeftSide.classList.add("LeftSide");
         AllTaskNewTask.appendChild(AllnewLeftSide)
     

   const AllcheckBox = document.createElement("INPUT")
       AllcheckBox.setAttribute("type", "checkbox");
       AllnewLeftSide.appendChild(AllcheckBox)

   const AllnewTitleAndDesc = document.createElement("div")
         AllnewTitleAndDesc.classList.add("TitleAndDesc")
         AllnewLeftSide.appendChild(AllnewTitleAndDesc)

   const AllnewTaskTitle = document.createElement("div")
         AllnewTaskTitle.classList.add("TaskTitle")
         AllnewTaskTitle.textContent=`${toDO.Title}`

   const AllnewTaskDesc = document.createElement("div")
         AllnewTaskDesc.classList.add("TaskDesk")
         AllnewTaskDesc.textContent=`${toDO.Desc}`

         AllnewTitleAndDesc.appendChild(AllnewTaskTitle)
         AllnewTitleAndDesc.appendChild(AllnewTaskDesc)


   const AllnewRightSide = document.createElement("div")
       AllnewRightSide.classList.add("RightSide")
       AllTaskNewTask.appendChild(AllnewRightSide)
     

       
   const AllnewDate = document.createElement("div")
         AllnewDate.classList.add("TaskDate")
         AllnewDate.textContent=`${toDO.Date}`
         AllnewRightSide.appendChild(AllnewDate)
   
   const AllnewEdit = document.createElement("img")
        AllnewEdit.classList.add("editTask")
        AllnewEdit.src="./edit.svg"
        AllnewRightSide.appendChild(AllnewEdit)

   const AllnewDelete = document.createElement("img")
       AllnewDelete.classList.add("deleteTask")
       AllnewDelete.src="./trash.svg"
       AllnewRightSide.appendChild(AllnewDelete)


         if(toDO.Priority==="low"){
             newTaskContainer.classList.remove("Low","Medium","High")
             newTaskContainer.classList.add("Low")
            AllTaskNewTask.classList.remove("Low","Medium","High")
            AllTaskNewTask.classList.add("Low")
      
          }
     
          if(toDO.Priority==="medium"){
             newTaskContainer.classList.remove("Low","Medium","High")
             newTaskContainer.classList.add("Medium")
             AllTaskNewTask.classList.remove("Low","Medium","High")
             AllTaskNewTask.classList.add("Medium")
      
          }
     
          if(toDO.Priority==="high"){
             newTaskContainer.classList.remove("Low","Medium","High")
             newTaskContainer.classList.add("High")
             AllTaskNewTask.classList.remove("Low","Medium","High")
             AllTaskNewTask.classList.add("High")
          }
 
 
          newDelete.addEventListener("click",()=>{
             newTaskContainer.remove()
             AllTaskNewTask.remove()
          })
          
          
                
    

          allTasksContainer.appendChild(AllTaskNewTask)

         for(let i=0;i<ProjectTasksContainerArray.length;i++){
            if(ProjectTasksContainerArray[i].style.display===""){
                ProjectTasksContainerArray[i].appendChild(newTaskContainer)
            }
         }
       
         
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