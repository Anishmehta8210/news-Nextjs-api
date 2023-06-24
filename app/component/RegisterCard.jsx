"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const RegisterCard = () => {
    const router = useRouter()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = await fetch("http://127.0.0.1:3000/api/user",{
            method:"POST",
            body:JSON.stringify({name,email,password}),
            headers:{
                "content-type":"application/json"
            }
        })

        data = await data.json()
        alert(data.msg)
        router.push("/")
        
    }
  return (
    <>
    <div className="bg-slate-200 rounded  mx-auto">
        <form action="" onSubmit = {handleSubmit} method='post'>
            <div className="mb-3 flex flex-col">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)}className='border border-slate-200' />
            </div>

            <div className="mb-3 flex flex-col">
                <label htmlFor="email">Email</label>
                <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)}className='border border-slate-200' />
            </div>

            <div className="mb-3 flex flex-col">
                <label htmlFor="password">password</label>
                <input type="text" id='password' value={password} onChange={(e) => setPassword(e.target.value)}className='border border-slate-200' />
            </div>

            <div className="mb-3 flex flex-col" >
                <button  type='submit' className='bg-red-500 rounded' name='submit' >Submit</button>

            </div>

            
        </form>
    </div>
    </>
  )
}

export default RegisterCard