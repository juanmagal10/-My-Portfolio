import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'> 
            <div className='col-span-2'> 
            <p className='uppercase text-xl1 tracking-widest text-[#5651e5]'>About</p>   
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>//I am not your normal developer</p>
          <p className='py-2 text-gray-600'>I have spent the last eigth years studying and working as a musician, playing a componing argentinian folk music, and instrumental pieces for guitar. But I also love the technology and love the computers and software, I have to use it a lot in  my music career. I started my studies in programing in 2020, learning python, but later I notice that I prefered to learn web development. I could learn, HTML, CSS, Javascript, React.JS, and now I am learning Next.js and Tailwind. </p>
          <p className='py-2 text-gray-600'>
            Fascinated with how intricated programing can be I was quickly drawn to learn more.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check some of my latest projects.
          </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105  ease-in duration-300'>
          <Image className='rounded-xl' src="/../public/assets/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg" alt="Pc"  width='250'height='250'/>
            </div>
        </div>
    </div>
  )
}

export default About
