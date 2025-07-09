


const Header = (props) => {

  // const [username , setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // } else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser' , '')
    props.changeUser('')
  }
  
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">Hello <br /> <span className="text-3xl font-semibold">Name</span></h1>
      <button onClick={logOutUser} className="text-white text-lg font-medium bg-red-600 px-3 py-2 rounded-small">Log Out</button>
    </div>
    
  )
}
export default Header;