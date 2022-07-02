import React from 'react'
import Link from 'next/link'

import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from  'react-icons/ai'
import {FaWhatsapp} from  'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LET'S BUILD SOMETHING TOGETHER
                  </p>
                  <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Juan</span></h1>
                  <h1 className='py-4 text-gray-700'>
                      A Front-End Web Developer
                  </h1>
                  <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                      I'm a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive front-end web applications while continue learning more things. 
                  </p>
                  <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                      <Link  href="https://www.linkedin.com/in/juan-manuel-galv%C3%A1n-salcedo-617a4b202/" >
                          <a target='_blank'>
                              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                  <FaLinkedinIn />
                              </div>
                          </a>
                      </Link>
                      <Link href="https://github.com/juanmagal10?tab=repositories">
                          <a target='_blank'>
                              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                  <FaGithub />
                              </div>
                          </a>
                      </Link>
                      <Link href='#contact'>
                          <a>
                              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                  <AiOutlineMail />
                              </div>
                          </a>
                      </Link>
                      <Link href='https://wa.me/3584909573'>
                          <a target='_blank'>
                              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                  <FaWhatsapp/>
                              </div>
                          </a>
                      </Link>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Main
