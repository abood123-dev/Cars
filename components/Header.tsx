import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  return (
    <div className='flex flex-row md:justify-center md:gap-[1000px] items-center justify-start gap-[255px]  '>
       <div>
        <Image src='/logo.svg' alt='' width={100} height={100} className='absolute md:top-4 md:left-9 w-20 md:w-[100px] top-5 left-4  ' />
       </div>
       <div>
     <Link href='/Sign'><button className='bg-white z-10 absolute md:top-4 focus:outline-none  text-sky-600 md:px-6 md:py-3 px-2 py-1 top-3 rounded-full border-solid border-sky-600 border '>Sign in </button> </Link>
       </div>
    </div>
  )
}

export default Header
