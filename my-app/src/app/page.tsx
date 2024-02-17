import React from 'react'
import { AlignJustify, Bell, Search } from "lucide-react";

const page = () => {
  return (
    <main className='max-w-[1920px] mx-auto relative'>
      <header className='max-w-full h-14 flex items-center justify-between px-5 '>
        <div className='flex items-center justify-center space-x-28'>
          <div className='flex items-center justify-center h-full my-auto space-x-5 '>
            <AlignJustify />
            <h1 className='text-2xl font-semibold'>VueStudio</h1>
          </div>
          <div className='h-10  my-auto  relative   '>
            <Search className='absolute left-4 top-2 ' size={20} />
            <input type="text" className='h-10 w-full  pl-12 outline-none rounded-lg bg-[#EBEEF4]  placeholder:text-sm' placeholder='Search menu...' />
          </div>
        </div>
        <div className='flex items-center justify-center space-x-5'>
          <Bell />
          <div className='flex items-center justify-center space-x-2'>
            <div className='h-9 w-9 rounded-full bg-red-400' />
            <h2 className='hidden md:block'>johnsmith@vuestudio.com</h2>
          </div>
        </div>
      </header>
    </main>
  )
}

export default page