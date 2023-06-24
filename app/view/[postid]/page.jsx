import NewsCart from '@/app/component/NewsCart';
import { Sidebar } from '@/app/component/Sidebar';
import React from 'react'

const page =  async ({params}) => {
    let {postid} = params;
    let data = await fetch(process.env.DOMAIN +`post/${postid}`)
    data = await data.json()
  return (
    <>
    <div className="flex p-5 gap-5">
        <div className="w-2/12">
            <Sidebar />
        </div>
        <div className="w-10/12">
            <NewsCart value={data.data} />
        </div>
    </div>
    </>

  )
}

export default page