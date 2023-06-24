"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function UpdateForm({value}) {
    const router= useRouter()
        const [title,setTitle] =useState(value.title)
        const [author,setAuthor] =useState(value.author)
        const [content,setContent] =useState(value.content)
        const handelSubmit = async (e) => {
            e.preventDefault();
            let data = await fetch(`/api/post/${value._id}`,{
                method:"PUT",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({title,author,content})
            })
            data = await data.json();
            alert(data.msg);
            router.push("/")
        }
  return (
    <>
        <div className="w-10/12 mx-auto border border-1 border-slate-600 p-3 mt-3">
            <form action="" onSubmit={handelSubmit}>
                <div className="flex flex-row mb-3">
                    <label className="w-2/12 text-2xl" htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} id='title' className="border w-full px-3 py-2" />
                </div>
                <div className="flex flex-row mb-3">
                    <label className="w-2/12  text-2xl" htmlFor="title">Author</label>
                    <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} id='author' className="border w-full px-3 py-2" />
                </div>
                <div className="flex flex-row mb-3">
                    <label className="w-2/12  text-2xl" htmlFor="title">Content</label>
                    <input type="text" value={content} onChange={(e)=>setContent(e.target.value)} id='content' className="border w-full px-3 py-2" />
                </div>
                <div className="flex">
                    <input type="submit" value="Submit" className="bg-teal-500 text-white px-3 py-2 rounded w-full" />
                </div>
            </form>
        </div>
    </>
  )
}

export default UpdateForm