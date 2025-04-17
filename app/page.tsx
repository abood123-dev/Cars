import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import { Fetchcars } from '@/utlis/Fetch';
import CarsWapper from '@/components/CarsWapper';
import Cars from '@/components/Cars';
export default async function Home() {

  return (
    <div>
     <CarsWapper/>
    </div>
  )
}
