

import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'




const App = () => {



  const [user , setUser] = useState(null);
  const [loggedInUserData  , setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  
  
  // useEffect(()=>{
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // } , [authData])
  

  const handleLogin = (email , password) => {
    if(authData && authData.admin.find((e)=> email==e.email && password==e.password)){
      setUser('admin')
      localStorage.setItem('loggedInUser' , JSON.stringify({role:'admin'}))
    }
    else if(authData && authData.employees.find((e)=> email==e.email && password==e.password)){
      const employee = authData.employees.find((e)=> email==e.email && password==e.password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser' , JSON.stringify({role:'employee'}))
      }
      
      
    } else{
      alert("Invalid Cerdential")
    }
  }
  
  


  useEffect(() => {
    setLocalStorage();
    getLocalStorage()
  })
  
  // const data = useContext(AuthContext)
  // console.log(data.employees);

  return <>
  {!user ? <Login handleLogin={handleLogin}></Login> : ''}
  {user=='admin' ? <AdminDashboard changeUser = {setUser} ></AdminDashboard> : (user=='employee' ? <EmployeeDashboard changeUser = {setUser}  data={loggedInUserData}></EmployeeDashboard> : null)}
  
  {/* <EmployeeDashboard></EmployeeDashboard> */}
  {/* <AdminDashboard></AdminDashboard> */}
  </>
}

export default App
