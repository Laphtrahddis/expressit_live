import { Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [menu,setMenu]=useState(false)

  const showMenu=()=>{
    setMenu(!menu)
  }

  const user = false; // Simulating user authentication status
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
       <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">ExpressIt</Link></h1>
       <div className="flex justify-center items-center space-x-0">
        <p><BsSearch/></p>
        <input className='outline-none px-3 py-1 ' placeholder='Search a post' type="text" />
       </div>
       <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
        {user? <h3><Link to='/write'>Write</Link></h3> :<h3><Link to='/login'>Login</Link></h3>}
        {user? <h3>Profile</h3> :<h3><Link to='/register'>Register</Link></h3>}
       </div>
      <div onClick={showMenu} className="md:hidden text-2xl">
        <p className="cursor-pointer"><HiBars3 /></p>
        {menu && <Menu/>}
      </div>
    </div>
  )
}

export default Navbar