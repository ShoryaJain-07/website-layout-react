import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data=useLoaderData()
  return (
    <div className='h-3/4 w-full  bg-gray-800  border-8 flex '>
    <div><img src={data.avatar_url} alt="Git picture" className='w-full max-w-md h-full' /></div>
    <div className='flex items-center justify-center w-3/4 text-center text-white text-4xl'>Github Followers : {data.followers}</div>
    </div>
  )
}

export default Github

export const githubLoader = async() =>{
  const response = await fetch ('https://api.github.com/users/ShoryaJain-07')
  return response.json()
}