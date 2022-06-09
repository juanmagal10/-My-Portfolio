import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ClicksCounterImg from '../public/assets/projects/clickCounter.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';

const ClicksCounter = () => {
  return (
    <div className='w-full'>
          <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
              <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
              <Image className='absolute z-1' layout='fill' objectFit='cover' src={ClicksCounterImg} /> 
              <div className='absolute top-[70%] max-w-[1240] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-3 '>
                  <h2 className='py-2'>Clicks Counter</h2>
                  <h3>Js / CSS / HTML / React.js</h3>
              </div>       
          </div>
          
          <div className='max-2-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
              <div className='col-span-4'>
                  <p>Project</p>
                  <h2>Overview</h2>
                  <p>Clicks counter made with react.js <br />
                      This app is a clicks counter that I realise when I started to understand the react hooks. It has a number that increases or decreases by one depend on wich button you click. And also have another button to restart de acount. The amazon logo is only for the decoration because I want to practice how to put a logo inside the app.
                  </p>
                   <button className='px-8 py-2 mt-4 mr-8'><Link href="https://react-clicks-counter.netlify.app/" passHref>
                    <a target='_blank'>Link</a></Link></button>
                  <button className='px-8 py-2 mt-4'><Link href="https://github.com/juanmagal10/Cicks-counter" passHref>
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

export default ClicksCounter