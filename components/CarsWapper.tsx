import React from 'react'
import { Fetchcars } from '@/utlis/Fetch';
import Cars from './Cars';
const CarsWapper = async () => {
    const Allcars= await Fetchcars();
    console.log(Allcars);

  return (
   <Cars cars={Allcars} />
  )
}

export default CarsWapper
 