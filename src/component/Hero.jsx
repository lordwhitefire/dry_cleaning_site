import React from 'react'
import { NavLink } from 'react-router-dom'
// import BlogPic1 from '../assets/BlogPic1.png'

const Hero = () => {
  return (
    <div>

        <section
        className="relative bg-[url(https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D)] bg-cover bg-center bg-no-repeat"
        >
        <div
            className="absolute inset-0 bg-dark/75 sm:bg-transparent lg:bg-transparent sm:from-dark/95 lg:from-dark/95 sm:to-neutral/60 lg:to-neutral/60 sm:bg-gradient-to-b"
        ></div>

        <div
            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 ml-0 md:ml-8 lg:ml-8 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
            <div className="max-w-xl text-center sm:text-left ">
                <h1 className="text-2xl font-semibold sm:text-5xl text-midnight">
                    Welcome to Rapid Clean
                </h1>
                <h3 className=" text-xl sm:text-4xl font-semibold text-white mt-6"> 
                    Your Reliable, Excellent, and Fast!!! laundry solution
                </h3>

            <p className="mt-16 max-w-lg sm:text-xl/relaxed text-white">
                Ditch the laundry pile!  Rapid Clean is your one-stop solution for 
                convenient and professional laundry care. Schedule pickups, 
                track progress in real-time, and enjoy fresh, 
                clean clothes delivered straight to your door. Get started today!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
                <NavLink
                to="/login"
                className="block w-full rounded-full bg-transparent px-12 py-3 text-sm font-medium text-midnight border border-midnight shadow hover:bg-white focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                    Log In
                </NavLink>

                <NavLink
                to="/signup"
                className="block w-full rounded-full bg-midnight px-12 py-3 text-sm font-medium text-white shadow hover:text-midnight hover:bg-white focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                Sign Up
                </NavLink>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Hero