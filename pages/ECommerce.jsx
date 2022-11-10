import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import reactEcomerce from '../public/assets/projects/react-e-comerce.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';


const EComerce = () => {
  return (
    <div className='w-full'>
          <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
              <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
              <Image className='absolute z-1' layout='fill' objectFit='cover' src={reactEcomerce} alt='portada' /> 
              <div className='absolute top-[70%] max-w-[1240] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-3 '>
                  <h2 className='py-2'>E-Comerse</h2>
                  <h3>Js / CSS / HTML / React.js / Auth0 / Stripe / Node</h3>
              </div>       
          </div>
          
          <div className='max-2-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
              <div className='col-span-4'>
                  <p>Project</p>
                  <h2>Overview</h2>
                  <p>E-comerce<br></br> It's an e-commerce made principally with react.js. Is a part of the John Smilga React course. You can log in with the Auth0 app and use Stripe to manage the payments.
                    You can also manage a lot of filtering types in the products section, letting you have a comfortable experience in the buying process.
                  </p>
                     <button className='px-8 py-2 mt-4 mr-8'><Link href="https://react-comfy-e-comerce.netlify.app/" passHref>
                    <a target='_blank'>Link</a></Link></button>
                  <button className='px-8 py-2 mt-4'><Link href="https://github.com/juanmagal10/john-smilg-e-comerce" passHref>
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
                          <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill  className='p-1'/>Node.js</p>
                          <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill  className='p-1'/>Auth0</p>
                          <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill  className='p-1'/>Stripe</p>
                      </div>
                  </div>
              </div>
              <Link href='/#projects'><a><p className='underline cursor-pointer'>Back</p></a></Link>
          </div>
    </div>
  )
}

export default EComerce
