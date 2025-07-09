const TaskListNumbers = ({data}) => {
 console.log(data)
  return (
  <div className="flex mt-10 justify-between gap-5 screen">
    <div className=" rounded-xl w-[45%] py-6 px-9 bg-red-400">
      <h2 className="text-3xl font-semibold">{data.taskStats.active}</h2>
      <h3 className="text-xl font-medium">Accepted Tasks</h3>
    </div>
    <div className=" rounded-xl w-[45%] py-6 px-9 bg-yellow-400">
      <h2 className="text-3xl font-semibold">{data.taskStats.newTask}</h2>
      <h3 className="text-xl font-medium">New Tasks</h3>
    </div>
    <div className=" rounded-xl w-[45%] py-6 px-9 bg-blue-400">
      <h2 className="text-3xl font-semibold">{data.taskStats.completed}</h2>
      <h3 className="text-xl font-medium">Completed Tasks</h3>
    </div>
    <div className=" rounded-xl w-[45%] py-6 px-9 bg-green-400">
      <h2 className="text-3xl font-semibold">{data.taskStats.failed}</h2>
      <h3 className="text-xl font-medium">Failed Tasks</h3>
    </div>
  </div>
 )
}
export default TaskListNumbers;