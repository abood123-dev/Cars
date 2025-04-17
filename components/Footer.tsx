import React from 'react'
import Image from 'next/image';
const Footer = () => {
  return (
    <div className='flex flex-row justify-start items-start gap-[500px] pt-12 pl-4 pb-9'>
       <div> 
         <div className='flex flex-col items-start gap-[30px]'>
              <div>
              <Image src='/logo.svg' alt='' width={100} height={100}/>   
              </div>    
              <div className='flex flex-col items-start gap-[5px]'>
                   <div className='text-[14px]'>Carhub 2023</div> <div className='text-[14px]'>All Rights Reserved ©</div>
              </div>
         </div>
        </div>
       <div className='flex flex-row justify-center items-center gap-[120px]'>  
         <div className='flex flex-col items-start gap-[20px]'>
            <div className='font-bold text-[15px] text-black'>About</div> <div className='text-[14px] text-gray-500'>How it works</div> <div className='text-[14px]  text-gray-500'>Featured</div> <div className='text-[14px]  text-gray-500'>Partnership</div> <div className='text-[14px]  text-gray-500'>Bussiness Relation</div>
        </div>
        <div className='flex flex-col items-start gap-[20px]'>
        <div className='font-bold text-[15px] text-black'>Company</div> <div className='text-[14px]  text-gray-500'>Events</div> <div className='text-[14px]  text-gray-500'>Blog</div> <div className='text-[14px]  text-gray-500'>Podcast</div> <div className='text-[14px]  text-gray-500'>Invite a friend</div>
        </div>
        <div className='flex flex-col items-start gap-[20px]'>
        <div className='font-bold text-[15px] text-black'>Socials</div> <div className='text-[14px] text-gray-500'>Discord</div> <div className='text-[14px]  text-gray-500'>Instagram</div> <div className='text-[14px]  text-gray-500'>Twitter</div> <div className='text-[14px]  text-gray-500'>Facebook</div>   
        </div>
       </div>  
    </div>
  )
}

export default Footer
