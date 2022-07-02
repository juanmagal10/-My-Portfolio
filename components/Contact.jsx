import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import contactImg from '../public/assets/contact-img.jpg'

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9s4wm29', 'template_konz6jt', e.target, 'k8glDKgtNvkRcNvAP')
        alert('Email Sended Correctly!')
        window.location='/#contact'
    }

  return (
    <div id='contact' className='w-full lg:h-screen'>
          <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
              <p className='text-xl tracking-widest uppercase text[#5651e5]'>
                  Contact
              </p>
              <h2 className='py-4'>Get In Touch</h2>
              <div className='grid lg:grid-cols-5 gap-8'>
                  {/* Left */}
                  <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-40 rounded-xl p-4'>
                 
                  <div className='lg:p-4 h-full'>
                      <div>
                              <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contactImg } width='600' height='400' alt="" />
                          </div>
                          <div>
                              <h2 className='py-2'>Name here</h2>
                              <p>Frontend Developer</p>
                              <p className='py-4'> I am available for freelance or full-time positions. Contact me and let's talk.</p>
                          </div>
                      <div>
                          <p className='uppercase pt-8'>Connec With Me</p>
                              <div className='flex items-center justify-between py-4'>
                          <Link  href="https://www.linkedin.com/in/juan-manuel-galvan-salcedo-617a4b202/">
                                <a target='_blank'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                          </Link>
                      <Link  href="https://github.com/juanmagal10">
                        <a target='_blank'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </a>
                      </Link>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                          <AiOutlineMail />
                      </div>
                      <Link href='https://wa.me/3584909573 '>
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
                  {/* rigth */}
                  <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                      <div className='p-4'>
                          <form onSubmit={sendEmail}>
                              <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                  <div className='flex flex-col'>
                                      <label className='uppercase text-sm py-2' htmlFor='name'>Name</label>
                                      <input name='name' id='name' className='border-2 rounded-lg flex border-grey-300' type="text"  />
                                  </div>
                                  <div className='flex flex-col'>
                                      <label className='uppercase text-sm py-2' htmlFor='phone-number'>Phone Number</label>
                                      <input id='phone-number' name='phone-number' className='border-2 rounded-lg flex border-grey-300' type="text"  />
                                  </div>
                              </div>
                              <div className='flex flex-col py-2'>
                                  <label htmlFor='email' className='uppercase text-sm py-2'>Email</label>
                                  <input id='email' name='email' className='border-2 rounded-lg flex border-grey-300' type="email"  />
                              </div>
                              <div className='flex flex-col py-2'>
                                  <label htmlFor='subject' className='uppercase text-sm py-2'>Subject</label>
                                  <input id='subject' name='subject' className='border-2 rounded-lg flex border-grey-300' type="text"  />
                              </div>
                              <div className='flex flex-col py-2'>
                                  <label htmlFor='message' className='uppercase text-sm py-2'>Message</label>
                                 <textarea id='message' name='message' className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                              </div>
                              <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                          </form>
                      </div>
                  </div>
              </div>
              <div className='flex justify-center py-12'>
                  <Link href='/'>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                          <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
                      </div>
                  </Link>
              </div>
        </div>
    </div>
  )
}

export default Contact
