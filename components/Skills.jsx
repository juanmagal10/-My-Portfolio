import React from 'react';
import Image from 'next/image';
import HTMLImage from '../public/assets/skills/html.png'
import CSSImage from '../public/assets/skills/CSS.png'
import javascriptImage from '../public/assets/skills/javascript.png'
import reactImage from '../public/assets/skills/react.png'
import nextImage from '../public/assets/skills/next.png'
import gitHubImage from '../public/assets/skills/github1.png'

const Skills = () => {
  return (
      <div id='skills' className='w-full lg:h-screen p-2'>
          <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
              <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
              <h2 className='py-4'>What I Can Do</h2>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
             

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                          <Image src={HTMLImage} width='64' height='64' alt='html'/>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                          <h3>HTML</h3>
                      </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                          <Image src={CSSImage} width='64' height='64' alt='css'/>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                          <h3>CSS</h3>
                      </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                          <Image src={javascriptImage} width='64' height='64' alt='javascript'/>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                          <h3>Javascript</h3>
                      </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                          <Image src={reactImage} width='64' height='64' alt='react'/>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                          <h3>React.js</h3>
                      </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                          <Image src={nextImage} width='88' height='64' alt='next'/>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                          <h3>Next.js</h3>
                      </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                          <Image src={gitHubImage} width='64' height='64' alt='github'/>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                          <h3>Github</h3>
                      </div>
                </div>
                  </div>
                   </div>

          </div>
      
    </div>
  )
}

export default Skills
