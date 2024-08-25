import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Footer from '../component/Footer'
import Blog from '../component/Blog'
import Testimonial from '../component/Testimonial'

import About from '../assets/About.png'
import basket from '../assets/basket.png'
import iron from '../assets/iron.png'
import washing from '../assets/washing.png'
import shirt from '../assets/shirt.png'
import Check from '../assets/Check.svg'
import ShirtImage from '../assets/ShirtImage.png'
import TrousersImage from '../assets/TrousersImage.png'
import SkirtImage from '../assets/SkirtImage.png'

import AboutCard from '../component/Cards/AboutCard'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      
      {/* About section */}
      <section className='bg-[#ECF0F5]'>
        <div className='relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-16'>
          <div className='flex justify-between h-24'>
            <h2 className='text-4xl font-semibold text-midnight'>About us</h2>
            <div className='absolute flex hidden lg:flex ml-[308px]'>
              <div className='h-12 w-12 mr-80 mt-8 rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA] to-[#9291FE]'></div>
              <div className='h-24 w-24 mr-3 rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA] to-[#9291FE]'></div>
              <div className='h-32 w-32 mb-14 rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA] to-[#9291FE]'></div>
              
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">  
            <div className='relative h-64 overflow-hidden md:h-96 lg:h-full sm:h-96'>
              <img src={About} className='rounded-lg sm:w-full sm:h-full md:w-full md:h-full  lg:w-96 object-cover ' alt='A man  surrounded by laundered clothes' />
            </div>
            <div>
              <div className=' w-full h-full flex flex-col justify-between'>
                <AboutCard 
                  heading='Company overview'
                  text=' At Rapid Clean Laundry and Drycleaners, 
                  we are dedicated to providing exceptional 
                  laundry solutions with speed, convenience, 
                  and quality at the forefront of our mission.'
                />
                <AboutCard 
                  heading='Company overview'
                  text=' At Rapid Clean Laundry and Drycleaners, 
                  we are dedicated to providing exceptional 
                  laundry solutions with speed, convenience, 
                  and quality at the forefront of our mission.'
                />
                <div className='absolute z-10 flex hidden mt-[330px] ml-[350px] lg:flex '>
                  <div className='h-28 w-28  rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA] to-[#9291FE]'></div>       
                </div>
                <AboutCard 
                  heading='Company overview'
                  text=' At Rapid Clean Laundry and Drycleaners, 
                  we are dedicated to providing exceptional 
                  laundry solutions with speed, convenience, 
                  and quality at the forefront of our mission.'
                />
              </div>
              <div className='absolute flex hidden  lg:flex '>
                <div className='h-10 w-10 ml-36 rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F4F4F6] via-[#C6C6FA] to-[#9291FE]'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services and pricing section */}
        <section className='bg-[#ECF0F5] mt-14'>
          <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:pl-14 lg:py-16">
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16 mr-8">
              <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left ">
                <h2 className="text-3xl font-semibold text-midnight sm:text-4xl">
                  Our Services
                </h2>

                <p className="mt-4 text-gray-600 text-base mt-6 sm:text-xl">
                At RapidClean we offer convenient, on-demand laundry, 
                pickup and delivery with real-time tracking.  
                We use eco-friendly cleaning methods to ensure 
                your clothes are fresh, clean, and cared for.  
                Schedule a pickup today and experience laundry made easy!
                </p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded bg-midnight px-16 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Explore
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <a
                  className="block rounded-2xl p-4 shadow-xl bg-white "
                  href="#"
                >
                  <img src={basket} alt='a basket vector'className='w-20 h-20' />

                  <h2 className="mt-2 font-semibold text-base">Laundry</h2>
                </a>
                <a
                  className="block rounded-2xl p-4 shadow-xl bg-white "
                  href="#"
                >
                  <img src={iron} alt='an iron vector'className='w-20 h-20' />

                  <h2 className="mt-2 font-semibold text-base">Ironing</h2>
                </a>
                <a
                  className="block rounded-2xl p-4 shadow-xl bg-white "
                  href="#"
                >
                  <img src={washing} alt='a washing machine vector'className='w-20 h-20' />

                  <h2 className="mt-2 font-semibold text-base">Washing</h2>
                </a>
                <a
                  className="block rounded-2xl p-4 shadow-xl bg-white "
                  href="#"
                >
                  <img src={shirt} alt='a shirt vector'className='w-20 h-20' />

                  <h2 className="mt-2 font-semibold text-base">Dry Cleaning</h2>
                </a>

                
              </div>
            </div>
          </div>
          
          {/* Pricing part */}
          <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:pl-14 lg:py-16">
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:mr-12">
              <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left ">
                <h2 className="text-3xl font-semibold text-midnight sm:text-4xl">
                  Pricing
                </h2>

                <p className="mt-4 text-gray-600 text-base mt-6 sm:text-xl">
                  RapidClean keeps laundry simple, and so is our pricing! 
                  We offer competitive rates based on the number of your 
                  clothes for laundry. Here's a quick breakdown:
                </p>
              </div>

              <div className='grid grid-cols-1'>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div
                    className="  flex flex-col items-center "
                  >
                    <div className='absolute z-10 w-14 h-14 bg-darkgreen mt-4 p-4 flex justify-center items-center rounded-full'>
                      <img src={Check} alt='an iron vector'className='w-11 h-11 ' />
                    </div>

                    <div className="mt-10 mr-0 lg:mr-10 font-semibold  bg-white relative flex justify-center items-center  rounded-2xl lg:w-52 w-full h-36 px-3 pb-1 shadow-xl">
                      <p className='mt-8 text-center text-base'>
                        <span className='text-midnight text-lg'>Per Cloth Pricing:</span> 
                        Our base price starts at  per number and price of item.
                      </p>
                    </div>
                  </div>   
                  <div
                    className="relative z-20   flex flex-col items-center "
                  >
                    <div className='absolute z-10 w-14 h-14 bg-darkgreen mb-28 p-4 flex justify-center items-center rounded-full'>
                      <img src={Check} alt='an iron vector'className='w-11 h-11 ' />
                    </div>

                    <div className="mt-6 font-semibold bg-white relative flex justify-center items-center  rounded-2xl lg:w-52 w-full h-44 px-3 pb-1 shadow-xl">
                      <p className='mt-8 text-center text-base'>
                        <span className='text-midnight text-lg'>Easy Estimates: </span> 
                        Use our online calculator to get an instant quote before you book. No hidden charges applied!
                      </p>
                    </div>
                  </div>   
                  <div
                    className="  flex flex-col items-center "
                  >
                    <div className='absolute z-10 w-14 h-14 bg-darkgreen mt-4 p-4 flex justify-center items-center rounded-full'>
                      <img src={Check} alt='an iron vector'className='w-11 h-11 ' />
                    </div>

                    <div className="mt-10 lg:ml-10 font-semibold  bg-white relative flex justify-center items-center  rounded-2xl lg:w-52 h-36 px-3 pb-1 shadow-xl">
                      <p className='mt-8 text-center text-base'>
                        <span className='text-midnight text-lg'>Special Services: </span> 
                        Additional fees may apply for special services like express delivery.
                      </p>
                    </div>
                  </div>   
                </div>
                
                <div className="hidden lg:grid md:grid grid-cols-1 mt-8 gap-4 sm:grid-cols-3">
                  <a href="#" className="block bg-white text-center shadow-xl rounded-lg">
                    <img
                      alt=""
                      src={ShirtImage}
                      className="h-64 w-full object-cover rounded-t-lg lg:h-40"
                    />

                    <h3 className="mt-4 text-sm font-semibold ">Top/Packet shirts</h3>

                    <p className="mt-2 max-w-sm text-xs">
                      Price: &#8358;700
                    </p>
                  </a>
                  <a href="#" className="block bg-white text-center shadow-xl rounded-lg">
                    <img
                      alt=""
                      src={TrousersImage}
                      className="h-64 w-full object-cover rounded-t-lg lg:h-40"
                    />

                    <h3 className="mt-4 text-sm font-semibold ">Top/Packet shirts</h3>

                    <p className="mt-2 max-w-sm text-xs pb-4">
                      Price: &#8358;700
                    </p>
                  </a>
                  <a href="#" className="block bg-white text-center shadow-xl rounded-lg">
                    <img
                      alt=""
                      src={SkirtImage}
                      className="h-64 w-full object-cover rounded-t-lg  lg:h-40"
                    />

                    <h3 className="mt-4 text-sm font-semibold ">Top/Packet shirts</h3>

                    <p className="mt-2 max-w-sm text-xs">
                      Price: &#8358;700
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </section>

        <Blog />
        <Testimonial />
        <Footer />
      </div>
      
  )
}

export default HomePage