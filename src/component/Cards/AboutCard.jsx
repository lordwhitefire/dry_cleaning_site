/* eslint-disable react/prop-types */
import React from 'react'

const AboutCard = (props) => {
  return (
    <div>
        <a
        href="#"
        className="relative block overflow-hidden shadow-xl rounded-lg bg-white mt-8 lg:mt-0 p-4 sm:p-6 lg:p-4"
        >
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green via-midnight to-card"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <h3 className="text-xl font-semibold sm:text-xl">
                    {props.heading}
                </h3>
            </div>

            <div className="mt-4">
                <p className="lg:text-base sm:text-base text-gray-500">
                    {props.text}
                </p>
            </div>
        </a>
    </div>
  )
}

export default AboutCard

