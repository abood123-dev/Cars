import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className='flex flex-row justify-center gap-[1000px] items-center'>
       <div>
        <Image src='/logo.svg' alt='' width={100} height={100} className='absolute top-4 left-9' />
       </div>
       <div>
       <button className='bg-white z-10 absolute top-4  text-sky-600 px-6 py-3 rounded-full border-solid border-sky-600 border'>Sign in </button>
       </div>
    </div>
  )
}

export default Header
