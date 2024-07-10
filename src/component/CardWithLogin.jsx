'use client';

import { Button, Card } from 'flowbite-react';
import Contact from './Contact'
import Footerr from './Footer';
import ContactUs from './ContactUs';
import BurgertList from './BergerList';
import { Link } from 'react-router-dom';

export default function CardWithLogin({isAdmin}) {
  return (
<div id="about"className='bg-green-400'>
   <div className='flex flex-col justify-evenly md:flex-row p-5 bg-green-500 py-24'>
     <Card className="bg-purple-500  max-w-4xl rounded-xl md:ml-14   py-12">
      <div className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        <h4>
        Discover Brrrgrrr: <span className='text-purple-800'> Burger Ordering Website</span>
        </h4>
      </div>
      <div className="font-normal text-gray-900 dark:text-gray-500">
        <p className='text-lg text-center font-bold '>
           <h2> HANG OUT WITH MY BURGErrr </h2>
        </p>
      </div>
    
    </Card>
   
   </div>
  {/* Burger list for order*/}
   
    <div>
      <BurgertList/>
    </div>
   
    {/* Contact Us */}
    <Contact/>
    <ContactUs/>
    <Footerr/>
</div>
  )
}


