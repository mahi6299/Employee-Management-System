import { useState } from "react"

const CreateTask = () => {

  const [taskTitle , setTaskTitle] = useState("")
  const [taskDescription , setTaskDescription] = useState("")
  const [taskDate , setTaskDate] = useState("")
  const [asignTo , setAsignTo] = useState("")
  const [category , setCategory] = useState("")

  const [task , setTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    setTask({taskTitle , taskDate , taskDescription , category , active:false , newTask:true , failed:false , completed:false})

    const data = JSON.parse(localStorage.getItem('employees'))
    
    data.forEach(function(ele){
      if(asignTo == ele.firstName){
        ele.tasks.push(task);
        ele. taskStats.newTask += 1; 

        console.log(ele);
      }
    })

    localStorage.setItem('employees' , JSON.stringify(data))

    setTaskTitle('')
    setTaskDate('')
    setAsignTo('')
    setCategory('')
    setTaskDescription('')
  }

  return (
    <div className="bg-[#1C1C1C] mt-7 rounded p-5">
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className="flex flex-wrap w-full bg-black-200 items-start justify-between ">
          <div className="w-1/2">
            <div className="mb-1.5">
              <h3 className="text-sm text-grey-300 mb-0.5">Task Title</h3>
              <input 
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="text" placeholder="UI" />
            </div>
            <div className="mb-1.5">
              <h3 className="text-sm text-grey-300 mb-0.5">Date</h3>
              <input 
              value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="date" />
            </div>
            <div className="mb-1.5">
              <h3 className="text-sm text-grey-300 mb-0.5" >Assign To</h3>
              <input 
              value={asignTo}
              onChange={(e)=>{
                setAsignTo(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"  type="text" placeholder="Employee Name"/>
            </div>
            <div className="mb-1.5">
              <h3 className="text-sm text-grey-300 mb-0.5" >Category</h3>
              <input 
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"  type="text" placeholder="Design , Dev , etc"/>
            </div>
          </div>
          
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-grey-300 mb-0.5" >Description</h3>

            <textarea 
            value={taskDescription}
              onChange={(e)=>{
                setTaskDescription(e.target.value)
              }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-grey-400" name="" id="" cols="" rows=""></textarea>

            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
          </div>
          
          
        </form>
      </div>
  )
}
export default CreateTask;