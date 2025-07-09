import AllTask from "../others/AllTask";
import CreateTask from "../others/CreateTask";
import Header from "../others/Header";

const AdminDashboard = (props) => {
  return (
    <div  className="h-screen w-full p-10">
      <Header changeUser = {props.changeUser}></Header>
      <CreateTask></CreateTask>
      <AllTask></AllTask>
    </div>
  )
}
export default AdminDashboard;