import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className='flex flex-row md:justify-center md:gap-[1000px] items-center justify-start gap-[180px]  '>
       <div>
        <Image src='/logo.svg' alt='' width={100} height={100} className='absolute md:top-4 md:left-9 w-20 md:w-[100px] top-5 left-4  ' />
       </div>
       <div>
       <button className='bg-white z-10 absolute md:top-4  text-sky-600 md:px-6 md:py-3 px-2 py-1 top-3 rounded-full border-solid border-sky-600 border '>Sign in </button>
       </div>
    </div>
  )
}

export default Header
