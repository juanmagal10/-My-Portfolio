import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CronoRentalImg from '../public/assets/projects/CronoRental.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';


const CronoRental = () => {
  return (
    <div className='w-full'>
          <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
              <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
              <Image className='absolute z-1' layout='fill' objectFit='cover' src={CronoRentalImg} alt='portada' /> 
              <div className='absolute top-[70%] max-w-[1240] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-3 '>
                  <h2 className='py-2'>Crono-Rental</h2>
                  <h3>React</h3>
              </div>       
          </div>
          
          <div className='max-2-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
              <div className='col-span-4'>
                  <p>Project</p>
                  <h2>Overview</h2>
                  <p>Page for rent cinema's and photographic's articles<br></br> It's a page that I made for Crono-Rental,  a company that rent audio equipment, camaras, lenses and lights. You can navigate through it and see how I present each products' list and also you can add each product to the cart. After that you can make the reserve of the products through whatsapp, I linked to the page the number of the company's owner. I manage the data of the products and print it in the message.
                      <br />
                     For the organization I divided the total of the products in three categories, photos, lights and sound, you can acces each ona through the carousel in the home.
                  </p>
                <button className='px-8 py-2 mt-4 mr-8'><Link href="https://crono-rental.netlify.app/" passHref>
                    <a target='_blank'>Link</a></Link></button>
                  <button className='px-8 py-2 mt-4'><Link href="https://github.com/juanmagal10/crono-rental-" passHref>
                    <a target='_blank'>Code</a></Link></button>
              </div>
              <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                  <div className='p-2'>
                      <p>Technologies</p>
                      <div className='grid grid-cols-3 md:grid-cols-1'>
                          <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='p-1' />Javascript</p>
                          <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill  className='p-1'/>HTML</p>
                          <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill  className='p-1'/>CSS</p>
                          <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill  className='p-1'/>React.js</p>
                      </div>
                  </div>
              </div>
              <Link href='/#projects'><a><p className='underline cursor-pointer'>Back</p></a></Link>
          </div>
    </div>
  )
}

export default CronoRental