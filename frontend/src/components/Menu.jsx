import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import { URL } from "../url"
import { Link } from "react-router-dom"


const Menu = () => {
    const {user} = useContext(UserContext)
    const {setUser}=useContext(UserContext)
    const handleLogout=async()=>{
        try {
            await axios.get(URL+"/api/auth/logout",{withCredentials:true})
            setUser(null)
            window.location.reload()


        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="bg-black w-[200px] flex flex-col items-start absolute top-12 right-6 rounded-md md:right-32 p-4 space-y-4">
        {!user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">Login</h3>}
        {!user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">Register</h3>}
        {user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">Profile</h3>}
        {user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">Write</h3>}
        {user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">My Blogs</h3>}
        {user &&  <h3 onClick={handleLogout} className="text-white text-sm hover:text-gray-500 cursor-pointer">Logout</h3>}
    </div>
  )
}

export default Menu