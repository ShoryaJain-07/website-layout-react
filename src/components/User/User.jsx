import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} =useParams()
  return (
    <div className='bg-gray-500 text-white flex text-3xl p-4 w-full items-center justify-center'>User : {userid}</div>
  )
}

export default User