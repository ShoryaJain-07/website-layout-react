import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
    <nav className='h-20 w-full items-center bg-gray-200 flex justify-center'>
        <div className='h-full w-1/5 flex justify-end items-center'>
           
            <div className='font-sans text-black text-xl font-medium'>
                Your <span className='text-orange-600'>logo</span>
            </div>
            
        </div>
        <div className='h-full w-3/5 flex justify-center items-center'>
        
        </div>
        <div className='h-full w-1/5'>
            <button className='font-sans font-medium p-0.5 h-3/4 w-1/2 text-sm rounded-lg border border-gray-400'>Log in</button>
            <button className='font-sans font-medium p-0.5 h-3/4 w-1/2 text-sm rounded-lg border bg-orange-600 text-white'>Get Started</button>
        </div>
    </nav>
    </header>
  )
}

export default Header