"use client"

import { headers } from 'next/dist/client/components/headers'
import React, { useState } from 'react'

const LoginCard = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handlelogin = async (e) => {
        e.preventDefault();

        let data = await fetch("http://127.0.0.1:3000/api/user/login",{
            method:"POST",
            body:JSON.stringify({email,password}),
            headers:{
               "Content-Type":"application/json"
            }
        })

        data = await data.json();
        alert(data.msg)
    }
  return (
    <>
    <div className="bg-slate-200 p-3 rounded">
        <form  onSubmit={handlelogin} method='post' className='flex flex-col'>
            <div className="mb-3 flex flex-col">
                <label htmlFor="email">Email</label>
                <input type="text" className='border px-3 py-2 rounded' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="mb-3 flex flex-col">
                <label htmlFor="password">Password</label>
                <input type="text" className='border px-3 py-2 rounded' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="mb-3">
                <button type="submit" className='bg-green-700 hover:bg-green-400 text-white px-3 py-2 rounded w-full'  >Login</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default LoginCard