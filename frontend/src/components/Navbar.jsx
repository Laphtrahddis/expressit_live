import { Link, useNavigate } from "react-router-dom"
import { BsSearch } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";
import { useLocation } from "react-router-dom";



const Navbar = () => {
  const [search,setSearch]=useState('')
  const [menu,setMenu]=useState(false)
  const navigate=useNavigate()
  const path=useLocation().pathname
  
  // console.log(search)

  const showMenu=()=>{
    setMenu(!menu)
  }

  const {user} = useContext(UserContext) // Simulating user authentication status
 
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
       <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">ExpressIt</Link></h1>
       {path==="/"&&<div className="flex justify-center items-center space-x-0">
        <p onClick={()=>navigate(search?"?search="+search:navigate("/"))} className="cursor-pointer"><BsSearch/></p>
        <input onChange={(e)=>setSearch(e.target.value)} className='outline-none px-3 py-1 ' placeholder='Search a post' type="text" />
       </div>}
       <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
        {user? <h3><Link to='/write'>Write</Link></h3> :<h3><Link to='/login'>Login</Link></h3>}
        {user? <div onClick={showMenu} > 
          <p className="cursor-pointer relative"><HiBars3 /></p> 
          {menu && <Menu/>}  
          </div>  :<h3><Link to='/register'>Register</Link></h3>}
       </div>
      <div onClick={showMenu} className="md:hidden text-2xl">
        <p className="cursor-pointer relative"><HiBars3 /></p>
        {menu && <Menu/>}
      </div>
    </div>
  )
}

export default Navbar