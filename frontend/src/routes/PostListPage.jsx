import React, { useState } from 'react'
import Postlist from "../components/Postlist"
import Sidemenu from '../components/Sidemenu'
const PostListPage = () => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className='mb-7 text-2xl'>Development Blog</h1>
      <button onClick={() => setOpen((prev) => !prev)} className='md:hidden block text-sm text-white rounded-2xl p-2 bg-blue-800 mb-3'>{open ? "Close" : "Filter or Search"}</button>
      <div className='flex flex-col-reverse md:flex-row gap-7'>
        <div className=''>
          <Postlist />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <Sidemenu />
        </div>
      </div>
    </div>
  )
}

export default PostListPage