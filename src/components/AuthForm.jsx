import React from 'react'
import { Icon } from '@iconify/react';
import Input from "../components/atoms/Input";

const Login = () => {
  return (
    <div className="w-96 mx-auto bg-white shadow-xl  px-3 py-5 rounded-lg border-[1px] border-gray-300">
        <div className="h-full w-full flex flex-col items-center gap-y-3">
            <Icon icon="material-symbols:lock" className="bg-red-700 text-white rounded-full w-10 h-10 p-1.5"/>
            <h1 className="text-2xl font-medium">Sign in</h1>
            <Input label="Email" name="email" />
            <Input label="Password" name="password" />
            <button className="bg-blue-900 text-white w-full py-1.5 rounded-md shadow-md mt-3">SIGN IN</button>
        </div>
        <div className="flex border-gray-400 border p-1.5 rounded-md items-center gap-3 w-fit mt-7 cursor-pointer">
            <Icon icon="flat-color-icons:google" className="w-6 h-6" />
            <span>Se connectez avec Google</span>
        </div>
        <p className="text-end text-sm uppercase mt-3">Don't have an account ? <span className="underline">SIGN UP</span></p>
    </div>
  )
}

const Register = ()=>{
  return(
    <div className="w-[500px] mx-auto bg-white shadow-xl  px-3 py-5 rounded-lg border-[1px] border-gray-300">
        <div className="h-full w-full flex flex-col items-center gap-y-3">
            <Icon icon="material-symbols:lock" className="bg-red-700 text-white rounded-full w-10 h-10 p-1.5"/>
            <h1 className="text-2xl font-medium">Sign up</h1>
            <div className='flex gap-5 w-full '>
              <Input label="First Name*" name="firstName" />
              <Input label="Last Name*" name="lastName" />
            </div>
            <Input label="Email*" name="email"/>
            <Input label="Password*" name="password"/>
            <Input label="Confirm Password*" name="confirmPassword"/>
            <button className="bg-blue-900 text-white w-full py-1.5 rounded-md shadow-md mt-3">SIGN IN</button>
        </div>
        <div className="flex border-gray-400 border p-1.5 rounded-md items-center gap-3 w-fit mt-7 cursor-pointer">
            <Icon icon="flat-color-icons:google" className="w-6 h-6" />
            <span>Se connectez avec Google</span>
        </div>
        <p className="text-end text-sm uppercase mt-3">already have an account <span className="underline">SIGN IN</span></p>
    </div>
  )
}

export default function AuthForm() {

  return (
    <Login />
  )
}
