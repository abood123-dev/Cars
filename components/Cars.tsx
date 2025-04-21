"use client";
import React, { useState } from 'react';
import { Fetchcars } from '@/utlis/Fetch';
import Image from 'next/image';
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { useEffect } from 'react';
import { useRef } from 'react';
const   Cartypes = [
  { id: 1, name: 'Acura' },
  { id: 2, name: 'Alfa Romeo' },
  { id: 3, name: 'Aston Martin' },
  { id: 4, name: 'Audi' },
  { id: 5, name: 'Cadillac' },
  { id: 6, name: 'Ferrari' },
  { id: 7, name: 'Fiat' },
  { id: 8, name: 'Honda' },
  { id: 9, name: 'Hyundai' },
  { id: 10, name: 'Jaguar' },
  { id: 11, name: 'Kia' },
  { id: 12, name: 'Lamborghini' },
  { id: 13, name: 'Land Rover' },
  { id: 14, name: 'Maserati' },
  { id: 15, name: 'Mazda' },
  { id: 16, name: 'Mclaren' },
  { id: 17, name: 'Nissan' },
  { id: 18, name: 'Ram' },
  { id: 19, name: 'Subaro' },
  { id: 20, name: 'Tesla' },
]
interface carstyle
{
    id:number,
    CarName:string,
    CarImage:string,
    oil:string,
    year:string,
    price: string,
    type: string,
    transmission: string,
    seats: number,
    horsepower: string,
    origin: string
}
interface Props
{
  cars:carstyle[] 
}
const Cars = ({cars}:Props) => {
    const [Hoveredid,sethovered]=useState<number|null>(null);
    console.log(Hoveredid);
    console.log(cars);
     const [selectedPerson, setSelectedPerson] = useState<any>('');
      const [query, setQuery] = useState('');
      const[Oil,setoil]=useState<string>("all");
      const[Year,setyear]=useState<string>('year');
      console.log(Oil);
      const filteredPeople =
        query === ''
          ? Cartypes
          : Cartypes.filter((person) => {
              return person.name.toLowerCase().includes(query.toLowerCase())
            })
           const [filteredcars,setFiltered]=useState<carstyle[] | any>(cars); 
           useEffect(() => {
            if (!cars || cars.length === 0) return;
            if (!selectedPerson || !selectedPerson.name) {
              setFiltered(cars); 
            } else {
              const filtered = cars.filter((cc:carstyle) => cc.CarName === selectedPerson.name);
              console.log(filtered);
              setFiltered(filtered);
            }
          }, [selectedPerson, cars]);
         useEffect(()=>
          {
            const results= Oil === "all" ? cars : cars.filter((vv:carstyle)=> vv.oil === Oil)
            setFiltered(results);
          },[Oil,cars])
          useEffect(()=>
            {
              const results= Year === "year" ? cars : cars.filter((vv:carstyle)=> vv.year === Year)
              setFiltered(results);
            },[Year,cars])
            const[Show,setshow]=useState<boolean>(false);
            const [Details,setdetails]=useState<carstyle[]>([]);
            const Handleclick=(id:number)=>
              {
                  const result=cars.filter((bb:carstyle)=> bb.id===id );
                  setshow(true);
                  setdetails(result);
              }
              const sectionRef = useRef<HTMLDivElement>(null);
              const Handlescroll=()=>
              {
                sectionRef.current?.scrollIntoView({ behavior: 'smooth' });               
              }
  return (
    <>
      <div className='md:pt-36 pt-32 flex-row justify-center align-start'>
            <h1 className='md:font-bold md:text-6xl/normal text-gray-800  md:ml-12 md:w-[520px] w-[250px] ml-[10px] font-sans text-xl  '>
            Find,book,rent a car-quickly and super easy!
            </h1>
            <p className='md:text-xl/7 text-gray-600 md:w-[380px] md:ml-12 md:mt-5 w-[220px] ml-[10px] mt-2 text-sm'>streamline your car rental experience with
             our effortless booking process
            </p>
            <button onClick={()=>Handlescroll()} className='text-white md:text-sm md:py-4 md:px-6 bg-sky-500 border-none rounded-3xl md:ml-12 mt-8 outline-none text-sm py-2 px-3 ml-[10px] '>Explore cars</button>
         </div>
         <div>
         <Image src="/hero-bg.png" alt='herobg' width={900} height={60} className='md:object-cover md:absolute md:-top-5 md:-right-96 md:w-[900px] w-[300px]'/>
         <Image src='/hero.png' alt='car' width={600} height={100} className='absolute md:top-36 md:right-12  top-[400px] right-28 w-[200px] md:w-[600px]' />    
         </div>
         <div className='flex flex-col items-start gap-1 md:pl-14 pt-[100px] md:pb-10 pl-4 pb-8 ' ref={sectionRef}>
              <div className='font-sans font-bold md:text-3xl text-xl text-gray-700'>Car Catalogue</div> <div className='font-sans text-sm'>Explore out cars you might like</div>
         </div>
         <div className='flex md:flex-row justify-start md:gap-[200px] gap-[50px] md:items-center pb-20 flex-col items-start'>
              <div className='flex md:flex-row justify-center gap-[10px]  md:pl-14 pl-3 flex-col'>
                   <div>
        <Combobox value={selectedPerson} onChange={setSelectedPerson} onClose={() => setQuery('')}>
           <ComboboxInput
             aria-label="Assignee"
             displayValue={(person:any) => person?.name}
             onChange={(event) => setQuery(event.target.value)}
             className='px-4 py-3 md:px-11 md:py-3 bg-gray-200 rounded-3xl text-gray-500 relative focus:outline-none'
             placeholder='Acura'
           />
           <Image src='/car-logo.svg' width={20} height={20} alt='' className='absolute md:left-[70px] md:top-[790px] md:inline-block hidden'/>
           <ComboboxOptions anchor="bottom" className="border empty:invisible  pl-2 w-60 h-20 z-10 ml-[-10px]">
             {filteredPeople.map((person) => (
               <ComboboxOption key={person.id} value={person} className="font-sans text-[15px] cursor-pointer w-full hover:bg-blue-700 hover:text-white">
                 {person.name}
               </ComboboxOption>
             ))}
           </ComboboxOptions>
         </Combobox>
         </div>
                   <div><input className='md:px-11 md:inline-block hidden md:py-3 px-4 py-3 bg-gray-200 rounded-3xl focus:outline-none relative' placeholder='Tiguan...'/></div>
                   <Image src='/model-icon.png' width={20}  height={20} alt='' className='md:inline-block absolute  md:left-[380px] md:top-[790px] hidden'/>         
                   <div><Image src='/magnifying-glass.svg' alt='' width={25} height={25} className='cursor-pointer md:inline-block hidden md:mt-4' /></div>
               </div> 
               <div className='flex flex-row gap-3'>
                   <div>
                     <select id='mySelect' onChange={(e)=>setoil(e.target.value)} className='w-full px-4 py-1 border border-gray-300 text-sm font-sans rounded-lg shadow-md text-start focus:shadow-lg  focus:outline-none transition'>
                      <option value='all' selected>All</option>
                       <option value='Fuel' >Fuel</option>
                       <option value='Gas' >Gas</option>
                       <option value='Electricity'>Electricity</option>
                     </select>
                   </div>
                   <div>
                   <select id='mySelect' onChange={(e)=>setyear(e.target.value)} className='w-full  px-4 py-1  border border-gray-300 md:text-sm text-px font-sans rounded-lg shadow-md text-start focus:shadow-lg  focus:outline-none transition'>
                       <option value='year' selected>Year</option>
                       <option value='2015'>2015</option>
                       <option value='2016'>2016</option>
                       <option value='2017'>2017</option>
                       <option value='2018'>2018</option>
                       <option value='2019'>2019</option>
                       <option value='2020'>2020</option>
                     </select>
                   </div>
               </div> 
               
         </div>
    <div className='md:grid md:grid-cols-2 md:gap-x-[-20px] md:gap-y-[25px]  md:ml-10 flex flex-col items-start ml-2 gap-4'>
      {filteredcars.map((car:carstyle)=>
        {
            return(
            
            <div key={car.id} onMouseEnter={()=>sethovered(car.id)} onMouseLeave={()=>sethovered(null)} className='flex flex-col items-start content-center gap-3 px-[1px] md:w-[450px] md:py-[40px] w-[240px] py-[20px] bg-white rounded-xl border-gray-200 border-solid border-[2px] hover:bg-sky-500 hover:border-none hover:text-white transition duration-500 ease-out ' >
               <p className='font-extrabold md:text-xl text-sm text-gray-900 pl-5'>{car.CarName}</p>
                <Image src={car.CarImage} width={150} height={150} alt='' className='md:w-80 md:h-40 object-cover mix-blend-multiply pl-10 w-40 h-20'/>
               {Hoveredid===car.id && 
               ( <button onClick={()=>Handleclick(car.id)} className='bg-sky-500 border-black border-solid border-[3px] rounded-2xl md:ml-20 text-center md:px-20 md:py-2 ml-3 px-10 py-[2px] hover:bg-black hover:text-sky-500' key={car.id}>See more details</button> )
               }
            </div>
            )
      }

        )}
    </div>
    {Show && Details.length > 0 && ( Details.map((ca:carstyle)=>
        {
          return(
            <>
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998]"></div>
          <div key={ca.id} className='bg-gray-100 fixed md:top-[-45%] top-[-5%] left-[50%] translate-x-[-50%] translate-y-[50%] z-[9999] md:px-[55px] md:pb-[3px] md:pt-[6px] px-[22px] pb-[2px] pt-[3px] border-solid border-gray-400 border-[1px] rounded-xl'>
             <Image src={ca.CarImage} width={150} height={150} alt='' className='md:w-80 md:h-40 w-40 h-20 object-cover mix-blend-multiply pl-10 pt-4 ' />
              <div className='font-sans font-extrabold md:text-3xl text-xl text-gray-900 pt-[12px]'>{ca.CarName}</div>
              <div className='text-blue-600 md:text-xl text-sm font-sans pt-5'>{ca.price}</div>
              <div className='text-gray-500 md:pt-5 pt-2 '>Type : {ca.type}</div>
              <div className='text-gray-500 md:pt-5 pt-2 '>Oil : {ca.oil}</div>
              <div className='text-gray-500 md:pt-5 pt-2 '>Seats : {ca.seats}</div>
              <div className='text-gray-500 md:pt-5 pt-2 '>Transmission : {ca.transmission}</div>
              <div className='text-gray-500 md:pt-5 pt-2 '>Horsepower : {ca.horsepower}</div>
              <div className='text-green-600 text-sm md:pt-5 pt-2 '>Origin : {ca.origin}</div>              
              <div onClick={()=>setshow(false)} className='relative text-red-700 font-sans md:text-4xl text-2xl md:top-[-523px] top-[-380px] cursor-pointer md:left-[340px] left-[140px] ' >x</div>
          </div>
          </>
          )
        })
    )}
    </>
  )
}

export default Cars
