import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data=useLoaderData()
  return (
    <div className='h-screen w-full border-8'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="Git picture" className='w-1/2 h-screen' />
    </div>
  )
}

export default Github

export const githubLoader = async() =>{
  const response = await fetch ('https://api.github.com/users/ShoryaJain-07')
  return response.json()
}