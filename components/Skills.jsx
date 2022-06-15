import React from 'react';
import Image from 'next/image';
import css from '../public/assets/skills/css.png'
import github1 from '../public/assets/skills/github1.png'
import html from '../public/assets/skills/html.png'
import javascript from '../public/assets/skills/javascript.png'
import next from '../public/assets/skills/next.png'
import react from '../public/assets/skills/react.png'

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
                          <Image src={html} width='64' height='64' alt='/'/>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                          <h3>HTML</h3>
                      </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                          <Image src={css} width='64' height='64' alt='/'/>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                          <h3>CSS</h3>
                      </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                          <Image src={javascript} width='64' height='64' alt='/'/>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                          <h3>Javascript</h3>
                      </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                          <Image src={react} width='64' height='64' alt='/'/>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                          <h3>React.js</h3>
                      </div>
                </div>
              </div>




              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                          <Image src={next} width='88' height='64' alt='/'/>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                          <h3>Next.js</h3>
                      </div>
                </div>
              </div>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                      <div className='m-auto'>
                          <Image src={github1} width='64' height='64' alt='/'/>
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
