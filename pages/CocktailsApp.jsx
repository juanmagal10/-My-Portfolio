import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cocktails from '../public/assets/projects/cocktailsApi.JPG';
import { RiRadioButtonFill } from 'react-icons/ri';

const ClicksCounter = () => {
  return (
    <div className='w-full'>
          <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
              <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
              <Image className='absolute z-1' layout='fill' objectFit='cover' src={cocktails} /> 
              <div className='absolute top-[70%] max-w-[1240] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-3 '>
                  <h2 className='py-2'>Cocktails</h2>
                  <h3>Js / CSS / HTML / React.js</h3>
              </div>       
          </div>
          
          <div className='max-2-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
              <div className='col-span-4'>
                  <p>Project</p>
                  <h2>Overview</h2>
                  <p>Cocktails page made with react <br />
                    This is an app that consumes the cocktails api. I create it to practice a combine a few things in react, for example, the react-router-dom tools and the useContext hook. And you can also search for an specific cocktail and look for its characteristics. 
                  </p>
                   <button className='px-8 py-2 mt-4 mr-8'><Link href="https://cocktailsapi-project.netlify.app/" passHref>
                    <a target='_blank'>Link</a></Link></button>
                  <button className='px-8 py-2 mt-4'><Link href="https://github.com/juanmagal10/React-CocktailsApi" passHref>
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