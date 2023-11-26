import React from 'react'
import Button from '../atoms/Button'

const Authorized = () =>{
  return (
    <div className='flex h-20 w-96 py-5 items-center justify-around'>
      <div className='h-14 w-14 rounded-full '>
        <img src={process.env.PUBLIC_URL+'/logo192.png'} alt="" />
      </div>
      <span>USER Name</span>
      <Button label="logout" bg="red-600" hover="red-800" />
    </div>
  )
}

const NotAuthorized = () =>{
  return (
    <div>
      <Button label="signin" bg="indigo-700" hover="indigo-900" />
    </div>
  )
}

function Navbar() {
  return (
    <div className="my-5 bg-white shadow-2xl py-3 h-20 rounded-2xl flex items-center justify-between px-16">
        <h1 className='text-center text-5xl text-blue-500'>SnapSync</h1>
        <Authorized />
    </div>
  )
}

export default Navbar
