import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Header/Navbar'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
    
  )
}

export default Main