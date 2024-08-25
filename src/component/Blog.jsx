import React from 'react'
import BlogPic1 from '../assets/BlogPic1.png'
import BlogPic2 from '../assets/BlogPic2.png'

const Blog = () => {
  return (
    <section className='bg-[#ECF0F5] mt-14'>
        <div className='relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-16'>
            <h1 className='text-2xl md:text-4xl font-semibold text-midnight'>Our Latest Blog & News</h1>
            <div className='mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8'>
                <div className="group">
                    <img
                        alt=""
                        src={BlogPic2}
                        className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />

                    <div className="p-4">
                        <a href="#">
                        <h3 className="text-lg font-medium text-darkgrey">5 REASONS YOU HAVE WHITE RESIDUES ON YOUR CLEAN CLOTHES</h3>
                        </a>

                        <a href='#' className="mt-2 line-clamp-3 underline text-base/relaxed text-midnight">
                            Read More
                        </a>
                    </div>
                </div>
                <div className="group">
                    <img
                        alt=""
                        src={BlogPic1}
                        className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />

                    <div className="p-4">
                        <a href="#">
                        <h3 className="text-lg font-medium text-darkgrey">PRACTICAL TIPS TO PREVENT ODOR FROM TAKING OVER YOUR CLOTHES</h3>
                        </a>

                        <a href='#' className="mt-2 line-clamp-3 underline text-base/relaxed text-midnight">
                            Read More
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Blog