import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import img from '../../assets/wraper.png'

export default function MainLayout() {
  return (
    <>
    <div className="">
     <img src={img} className='w-full h-44'/>
    </div>
      <Navbar/>
      <div className="container">
        <Outlet/>
      </div>
    </>
  )
}

