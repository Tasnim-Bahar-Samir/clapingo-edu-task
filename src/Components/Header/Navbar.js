import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/Clapingo Logo.png'
import {FaUserAlt} from 'react-icons/fa'
import { authProvider } from '../../Contexts/Usercontext'
import './Navbar.css'
const Navbar = () => {
    const{user,userLogOut} = useContext(authProvider)
    const navigate = useNavigate()
    console.log(user)
    const handleLogout = ()=>{
        userLogOut()
        navigate('/login')
    }
  return (
    <div className="navbar bg-base-100 md:px-10 px-2 h-[90px] shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li ><Link to='/'>Plans & Pricing</Link></li>
        <li tabIndex={0}>
          <a className="justify-between">
          Teach with us
          </a>
        </li>
        <li><a>Affiliate Program</a></li>
        <li><a>Kids</a></li>
      </ul>
    </div>
    <Link to='/' className="normal-case md:text-4xl text-xl font-bold flex items-center"><img className='w-24' src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="md:flex gap-12">
      <li><Link to='/'>Plans & Pricing</Link></li>
      <li tabIndex={0}>
        <a>
        Teach with us
        </a>
        
      </li>
      <li><a>Affiliate Program</a></li>
      <li><a>Kids</a></li>
    </ul>
  </div>
  <div className="navbar-end  flex md:gap-5 gap-1">
  {
    user?.uid?
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full h-10">
          {user.photoURL?
            <img className='w-full' src={user.photoURL} alt="" />
          :<FaUserAlt className='w-full h-full'/>}
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li onClick={handleLogout}><a>Logout</a></li>
      </ul>
    </div>
    :
    <Link to='/login' className='px-6 py-[10px] primary-bg rounded-[80px] text-white flex items-center gap-3'><FaUserAlt/> Login</Link>
  }
  </div>
</div>
  )
}

export default Navbar