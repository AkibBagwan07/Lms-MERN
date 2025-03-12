import React, { useContext } from 'react'
import { assets} from "../../assets/assets"
import { Link, useNavigate } from 'react-router'
import MyEnrollments from '../pages/student/MyEnrollments'
import { useClerk , UserButton , useUser } from '@clerk/clerk-react'
import { AppContext } from '../context/AppContext'
const Navbar = () => {
    const isCourseListPage = location.pathname.includes("/course-list")
    const navigate = useNavigate()
    const { openSignIn } = useClerk()
    const { user } = useUser()
    const { isEducator} = useContext(AppContext)

    return (
        <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4
         ${isCourseListPage ? 'bg-white' : "bg-cyan-100/70"}`}>
      <img onClick={()=> navigate("/")} src={assets.logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />
            <div className='hidden md:flex items-center gap-5 text-gray-500'>
                <div className='flex item-center gap-5 '>
                    {user && <><button onClick={() => { navigate("/educator")}}>{ isEducator ? "Educator Dashboard" : "Become Educator"}</button> |
                    <Link to="/my-enrollments">My Enrollments</Link></>}
                </div>
                {user ? <UserButton /> : <button onClick={openSignIn} className='bg-blue-600 text-white px-10 py-3 rounded-full'>Create Accout</button>}
            </div>
             {/* for small screens */}
            <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
                <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
                    {user && <><button>Become Educator</button> |
                    <Link to="/my-enrollments">My Enrollments</Link></>}
                </div>
                { 
                    user ? <UserButton/> : 
                       <button onClick={() => { navigate("/educator")}}>{ isEducator ? "Educator Dashboard" : "Become Educator"}</button>}
            </div>
      </div>
)
}

export default Navbar