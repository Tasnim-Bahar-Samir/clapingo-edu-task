import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Header/Navbar'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <div className=' max-w-[1536px] mx-auto'>
        <Outlet/>
        </div>
    </div>
    
  )
}

export default Main