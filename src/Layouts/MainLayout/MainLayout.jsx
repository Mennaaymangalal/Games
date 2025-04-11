import React from 'react'
import { Outlet } from 'react-router-dom'
import img from '../../assets/wraper.png'
import NavbarComp from '../../Components/Navbar/NavbarComp'

export default function MainLayout() {
  return (
    <>
    <div className="">
     <img src={img} className='w-full h-44'/>
    </div>
      <NavbarComp/>
      <div className="">
        <Outlet/>
      </div>
    </>
  )
}

