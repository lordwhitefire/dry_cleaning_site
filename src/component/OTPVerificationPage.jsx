import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import ResetPassword from '../pages/ResetPassword';

const OTPVerificationPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State variable for loading state
  const refs = useRef([null, null, null, null, null, null]); // Refs for input elements

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    try {
      // Join the OTP array to form a single string
      const formattedOtp = otp.join('');
      
      // Send the email and OTP to your backend for verification
      const response = await axios.post('YOUR_BACKEND_URL/verify-otp', { email, otp: formattedOtp });
      
      // Handle successful verification
     
    } catch (error) {
      // Handle verification error
      setErrorMessage('Invalid OTP. Please try again.');
      setVerificationSuccess(true);
      setIsLoading(false); 
    }
  };

  const handleChange = (index, value) => {
    // Update the OTP array with the new value at the specified index
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically focus the next input box if a digit is entered
    if (value && index < 5) {
      refs.current[index + 1].focus();
    }
  };
  return (
    <div>
     {verificationSuccess ? (
      <ResetPassword />
     ) :(
    <div className='flex items-center'>
      <div className='bg-awhite w-[20rem]  lg:w-[400px] rounded-md  lg:rounded-[1rem] flex flex-col justify-center items-center gap-y-[2rem] py-[3rem]  '>
        <div className='text-left'>
          <h2 className='text-[2rem] mt-[1rem] lg:text-[40px] text-center text-amidnight font-semibold'>Reset Password</h2>
          {/* <h3 className='lg:text-[1.3rem] mt-[0.5rem] font-[500] text-center text-[#646468]'>Enter the six digit code sent to your <br /> email address</h3> */}
        </div>
        <form onSubmit={handleSubmit} className='lg:w-[465px] w-[18rem]'>
          <div className='  flex flex-col justify-between items-center'>
                    <h3 className='lg:text-[1.3rem] mt-[0.5rem] font-[500] text-center text-[#646468]'>Click on the link sent to your email<br /> address</h3> 
         {/* 
         <div className="rounded-md shadow-sm  -space-y-px">
            <div className="grid  grid-cols-6 gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  value={digit}
                  maxLength={1}
                  placeholder='0'
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="appearance-none block w-10 py-2 border border-alight bg-alight rounded-md shadow-sm text-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  ref={(el) => (refs.current[index] = el)}
                />
              ))}
            </div>
            </div>
            */}
           <div className='flex  mt-[1rem] gap-x-[0.3rem]'>
          
              <p >Didn't receive a link? </p>
            
            <div>
            <Link to="/forgot-Password" className="text-sm text-amidnight underline active:text-rose-500 relative -top-[0.1rem] underline-offset-2" >Resend</Link>
            </div>
           </div>
          </div>
          <div className=' flex flex-col mt-[2rem] items-center  justify-between'>
          <button id="signupButton" className='w-48 lg:w-[10rem] h-[36px] active:bg-rose-500 text-awhite rounded-full bg-[#0100BB] text-center' type="submit">
                  {isLoading ? (
                    <p>  Processing... <span class="icon-[svg-spinners--tadpole] ml-[0.5rem] text-awhite "></span>{/* Add your SVG animation here */}
                    </p>
                    ):( 'Continue'
                    )}
                </button>
         
          
          </div>
        </form>
        

      </div>
      {/* <div className=''>
        <img src={SignupImg} alt='Towel stacked together' className='h-48 w-full hidden lg:block object-cover rounded-r-xl md:h-[600px] md:w-full ' />
      </div> */}
    </div>
)}
    </div >
  );
};

export default OTPVerificationPage;

