import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

  const authData = useContext(AuthContext)

  console.log(authData);
  return (
    <div className="bg-[#1C1C1C] p-5 mt-5 rounded ">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 ">Employee Name</h2>
        <h3 className="w-1/5 ">New Tasks</h3>
        <h5 className="w-1/5 ">Avtive Tasks</h5>
        <h5 className="w-1/5 ">Completed Tasks</h5>
        <h5 className="w-1/5 ">Failed Tasks</h5>
      </div>

      <div className="">
        {authData.employees.map(function(ele , idx){
        return <div key={idx} className=" mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 ">{ele.firstName}</h2>
        <h3 className="w-1/5 text-blue-600">{ele.taskStats.newTask}</h3>
        <h5 className="w-1/5 text-yellow-600">{ele.taskStats.active}</h5>
        <h5 className="w-1/5 text-green-600">{ele.taskStats.completed}</h5>
        <h5 className="w-1/5 text-red-600">{ele.taskStats.failed}</h5>
      </div>
      })}
      </div>
      
    </div>
  )
}
export default AllTask;