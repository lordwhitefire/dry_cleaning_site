import React, { useState } from 'react';
import axios from 'axios';

import OTPVerificationPage from '../component/OTPVerificationPage';


const ForgotPassword =() => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetError, setResetError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State variable for loading state

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    console.log('Button clicked')

    try {
      // Assuming you have an API endpoint for resetting the password
      const response = await axios.get('https://rapidclean-laundry.onrender.com/api/user/forgotPassword', {
        email
      });
      
      // Assuming the backend responds with success message
      
      setIsLoading(false); 
    } catch (error) {
      console.error('Error resetting password:', error);
      setResetError('Error resetting password. Please try again later.');
      setIsLoading(false); 
      setResetSuccess(true);
    }
  };

  return (
    
    <div className='bg-[#EBEBEB] max-w-screen-2xl mx-auto p-4 flex justify-center items-center min-h-screen'>
       {resetSuccess ? (
        <OTPVerificationPage />
        ) : (
    <div className='flex items-center'>
      <div className='bg-white w-60 md:w-96 lg:w-[530px] rounded-[2rem] flex flex-col justify-center py-[3rem] px-[2rem]'>
        <div>
          <h2 className='text-2xl lg:text-4xl text-center font-semibold'>Forgot Password</h2>
          <h3 className='text-xs lg:text-2xl font-[500] text-[#646468] mt-2'>Please enter your email below to receive a password reset link </h3>
        </div>
     
          <form onSubmit={handleResetPassword} className='w-[465] mt-14'>
            <div className=' flex flex-col justify-between'>
              
              <div className='flex flex-col '>
                <label htmlFor="email" className='text-[14px]'>Your email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  className='h-[36px] rounded-lg mt-[4px]  outline-none border border-solid border-[#646468]'
                  onChange={(e) => {
                    setEmail(e.target.value);
                    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
                    setEmailError(emailRegex.test(e.target.value) ? '' : 'Please enter a valid email address');
                  }}
                  required
                />
                {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
              </div> 
              {resetError && <p style={{ color: 'red' }}>{resetError}</p>} 
            </div>
            <div className='mt-6 flex flex-col items-center  justify-between'>
            <button id="signupButton" className='w-48 lg:w-full h-[36px] active:bg-rose-500 text-white rounded-full bg-[#0100BB] text-center' type="submit">
                  {isLoading ? (
                    <p>  Processing... <span class="icon-[svg-spinners--tadpole] ml-[0.5rem] text-white "></span>{/* Add your SVG animation here */}
                    </p>
                    ):( 'send'
                    )}
                </button>
            </div>
        </form>
       
        <p className='text-base font-normal text-center mt-[10px]'>Don’t have an account? <span className='text-[#0100BB]'><a href='/signup'> Sign Up</a></span>  </p>
      </div>
    </div>
    )}
   </div>
  );
};

export default ForgotPassword;
