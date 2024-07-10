'use client';
import b1 from './../assets/a1.jpg'
import b2 from './../assets/a2.jpg'
import b3 from './../assets/a3.png'
import b4 from './../assets/a4.jpg'
import b5 from './../assets/a5.png'
import b6 from './../assets/b6.jpg'
import { Carousel } from 'flowbite-react';

export default function SlidingImg() {
  return (
   <>
     <Carousel className='-mt-16 p-5 sm:w-3/4 sm:h-3/4  sm:mt-10' >    
      <img
      className='rounded-lg'
        alt="..."
        src={b1}
      />
      <img
      className='rounded-lg'
        alt="..."
        src={b2}
      />
      <img
      className='rounded-lg'
        alt="..."
        src={b4}
      />
      <img
      className='rounded-lg'
        alt="..."
        src={b3}
        />
      <img
        alt="..."
        src={b5}
      />
    
    
    </Carousel>
    </>
  )
}


