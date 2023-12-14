import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
    <nav className='h-20 w-full items-center bg-white flex justify-center shadow-md'>
        <div className='h-full w-1/5 flex justify-end items-center'>
          <Link to='/'>
            <div className='font-sans text-black text-xl font-medium'>
                Your <span className='text-orange-600'>logo</span>
            </div>
          </Link> 
        </div>
        <div className='h-full w-3/5 flex justify-center items-center'>
          <NavLink to='/' className={({isActive})=>`m-5 ${isActive ? "text-orange-600" : "text-black"}`}>Home</NavLink>
          <NavLink to='/about' className={({isActive})=>`m-5 ${isActive ? "text-orange-600" : "text-black"}`}>About</NavLink>
          <NavLink to='/contact' className={({isActive})=>`m-5 ${isActive ? "text-orange-600" : "text-black"}`}>Contact</NavLink>
          <NavLink to='/github' className={({isActive})=>`m-5 ${isActive ? "text-orange-600" : "text-black"}`}>Github</NavLink>
        </div>
        <div className='h-full w-1/5 flex items-center'>
            <button className='font-sans font-medium p-0 m-2 h-1/2 w-1/2 text-sm rounded-lg border border-gray-400'>Log in</button>
            <button className='font-sans font-medium p-0 m-2 h-1/2 w-1/2 text-sm rounded-lg border bg-orange-600 text-white'>Get Started</button>
        </div>
    </nav>
    </header>
  )
}

export default Header