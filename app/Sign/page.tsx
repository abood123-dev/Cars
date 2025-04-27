"use client";
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
const Sign = () => {
    const[Input1,setinput1]=useState<string>('');
    const[Input2,setinput2]=useState<string>('');
    const[Input3,setinput3]=useState<string>('');
    const[Empty1,setempty1]=useState<boolean>(false);
    const[Empty2,setempty2]=useState<boolean>(false);
    const[Empty3,setempty3]=useState<boolean>(false);
    const[Congrats,setcongrats]=useState<boolean>(false);
    const Firstemty=()=>
    {
        if(Input1==="")
            {
                setempty1(true)
            }
            else
            {
                setempty1(false);
            }
            if(Input2==="")
            {
                    setempty2(true)
            }
                else
            {
                setempty2(false);
            }
            if(Input3==="")
            {
                    setempty3(true)
            }
                else
            {
                    setempty3(false);
            }
            if(Input1 && Input2 && Input3!== "")
            {
                setcongrats(true);
            }
    }
      const imgsrc="https://th.bing.com/th/id/OIP.Edb-NrWzAt6EvWZZhTnkBAHaES?w=278&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7";
  return (
    <div className='flex flex-row justify-center items-center gap-10 mt-4'>
    <div className='md:w-[400px] w-[350px] border-solid border-sky-600 border-[2px] mt-14 content-center rounded-xl'>
    <div className='flex flex-col items-start gap-5 content-center md:pl-9 pl-3  pt-10 pb-5'>
        <div className='font-sans font-bold text-gray-900 md:text-[20px] text-[15px]'>
            Name
        </div>
        <div>
            <input type='text' onChange={(e)=>setinput1(e.target.value)} className='bg-gray-300 border-none rounded-md md:px-6 md:py-2 px-3 py-1 focus:outline-none' placeholder='Enter your name...' />
        </div>
        {Empty1 ? <div className='text-red-700 -mt-3'> you should fill this input</div> : null }
        <div className='font-sans font-bold text-gray-900 md:text-[20px] text-[15px]'>
            Email
        </div>
        <div>
            <input type='text' onChange={(e)=>setinput2(e.target.value)} className='bg-gray-300 border-none rounded-md md:px-6 md:py-2 px-3 py-1 focus:outline-none' placeholder='Enter your email...' />
        </div>
        {Empty2 ? <div className='text-red-700 -mt-3'> you should fill this input</div> : null }
        <div className='font-sans font-bold text-gray-900 md:text-[20px] text-[15px]'>
            Password
        </div>
        <div>
            <input type='password' onChange={(e)=>setinput3(e.target.value)} className='bg-gray-300 border-none rounded-md md:px-6 md:py-2 px-3 py-1  focus:outline-none' placeholder='Enter your password...' />
        </div>
        {Empty3 ? <div className='text-red-700 -mt-3'> you should fill this input</div> : null }
        <div>
        <button onClick={Firstemty} className='bg-white border-sky-500 border-solid border-[1px] rounded-md md:px-5 md:py-4 px-3 py-2 text-sky-500 mt-3 hover:bg-sky-500 hover:text-white ease-out transition-transform focus:outline-none'>Sign up</button>
        </div>
        {Congrats ? <div className='text-green-500'>Congurlation you have signed up</div> : null} 
    </div>
    </div>
    <div className="relative w-[600px] h-[600px] ">

  <Image
    alt="car"
    src="/converted_image.png"
    width={600}
    height={600}
    className="md:absolute top-28 left-0 z-10 mix-blend-multiply hidden"
  />
</div>

    </div>
  )
}

export default Sign
