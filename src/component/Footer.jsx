import React from 'react'
import Logo from '../assets/Logo.png'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
import call from '../assets/call.svg'
import sms from '../assets/sms.svg'
import location from '../assets/location.svg'
import NewsletterForm from './Newsletter'

const Footer = () => {
  return (
    <footer className="bg-[#EBEBEB] border-t border-t-midnight">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex justify-center text-teal-600 sm:justify-start">
                    <img src={Logo} alt="Rapid Clean logo" className="w-28" />
                </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 pt-4 md:grid-cols-4 lg:grid-cols-6">
                <div className="text-center sm:text-left">
                    <p className="text-base font-semibold text-midnight">COMPANY</p>

                    <ul className="mt-8 space-y-4 text-xs text-purple">
                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                            Home
                            </a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Services </a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                            Pricing
                            </a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Book Now </a>
                        </li>
                    </ul>
                </div>

                <div className="text-center sm:text-left">
                    <p className="text-base font-semibold text-midnight">LEGAL</p>

                    <ul className="mt-8 space-y-4 text-xs text-purple">
                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                            Terms and Condition
                            </a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">Refund and Cancellation</a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">Privacy Policy</a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Cookie Policy </a>
                        </li>
                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Offer Terms </a>
                        </li>
                    </ul>
                </div>

                <div className="text-center sm:text-left w-full lg:w-80">
                    <p className="text-base font-semibold text-midnight">Contact</p>

                    <ul className="mt-8 space-y-4 text-xs text-purple ">
                        <li>
                            <a className=" transition flex items-center" href="#">
                                <img src={call} alt='call vector' className='mr-2 w-4 '/>
                                09152043110, 08038440648
                            </a>
                        </li>

                        <li>
                            <a className=" transition flex items-center" href="#">
                                <img src={sms} alt='email vector' className='w-4 mr-3'/>
                                rapidcleanlaundry.abuja@gmail.com
                            </a>
                        </li>

                        <li>
                            <a className="transition flex items-center" href="#"> 
                                <img src={location} alt='location vector' className='mr-2 w-6'/>
                                <p >Plot 255 Hassan T. Sanni Street CBN Choos Estate Abuja.</p>
                            </a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Help </a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                                Feedback
                            </a>
                        </li>
                    </ul>
                </div>  

                
                <NewsletterForm />
            </div>

            <div className="mt-16 border-t border-purple pt-6 sm:flex sm:items-center sm:justify-between">
            <p className="text-center text-xs text-purple sm:text-left">
                &copy; 2024 Your Company, Inc. All rights reserved.
            </p>

            <ul className="mt-4 flex justify-center text-xs text-purple gap-6 sm:mt-0 sm:justify-start">
                <li>
                    <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="flex items-center text-teal-700 transition hover:text-midnight"
                    >
                        <img src={instagram} alt='instagram logo' className='w-6'/>
                        <span className="ml-2">@Rapidcleanlaundry</span>
                    </a>
                </li>

                <li>
                <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="flex items-center transition hover:text-teal-700/75"
                >
                    <img src={whatsapp} alt='whatsapp logo' className='w-6'/>
                    <span className="ml-2">+234 803 844 0648</span>
                </a>
                </li>

                
               
            </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer