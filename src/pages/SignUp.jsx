import React, { useState } from 'react';
import axios from 'axios';
import SignUpSucessfulPage  from '../component/SignUpSuccessfulPage'; 
import { GoogleLogin } from '@react-oauth/google';
// import SignupImg from '../assets/SignupImg.png'

const SignUp = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [userpassword, setUserpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [SignUpSuccessful, setSignUpsuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State variable for loading state
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 

    try {
      const response = await axios.post('https://rapidclean-laundry.onrender.com/api/user/register', {
        fullname,
        email,
        userpassword,
        confirmPassword,
        agreed
      });
      console.log("User signup successful", response.data); // Handle successful response from the backend
      setRegistrationMessage('Signup successful! You can now login.');
      setIsLoading(false); 
    } catch (error) {
      console.error('Error submitting data:', error); // Handle error response from the backend
      setRegistrationMessage('Error signing up. Please try again later.');
      setSignUpsuccessful(true); 
      setIsLoading(false); 
    }
  };

  const handleGoogleLoginSuccess = async (response) => {
    try {
      const token = response.accessToken; // Obtain Google OAuth token
      const backendResponse = await axios.post('https://rapidclean-laundry.onrender.com/api/user/register', { token }); // Send token to backend
      console.log(backendResponse.data); // Handle backend response
      setShowSuccessPopup(true);
    } catch (error) {
      console.error('Error logging in with Google:', error);
      setRegistrationMessage('Error signing up with Google. Please try again later.');
    }
  };

  const handleGoogleLoginError = (error) => {
    console.error('Google login error:', error);
    setRegistrationMessage('Error signing up with Google. Please try again later.');
  };

  const handleVerificationSuccess = () => {
    // Redirect to login page after successful verification
    window.location.href = '/login';
  };

  return (
   <div className='bg-[#EBEBEB] max-w-screen-2xl mx-auto p-4 flex justify-center items-center min-h-screen'>
    {SignUpSuccessful ? (
        <SignUpSucessfulPage /> // Render ErrorPage if signupError is true
      ) : (
    <div className='flex items-center'>
      <div className='bg-white w-60  lg:w-[577px] rounded-lg flex flex-col justify-center p-6'>
        <div className='text-left'>
          <h2 className='text-[34px] lg:text-[40px] font-semibold'>Welcome to Rapid Clean</h2>
          <h3 className='text-[24px] font-[500] text-[#646468]'>Create an account</h3>
        </div>
        <form onSubmit={handleSubmit} className='w-[465] mt-[16px]'>
          <div className='h-[304px] flex flex-col justify-between'>
            <div className='flex flex-col '>
              <label htmlFor="fullname" className='text-[14px]'>Full Name*</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className='h-[36px] rounded-lg mt-[4px]  outline-none border border-solid border-[#646468]'
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>
            <div className='flex flex-col '>
              <label htmlFor="email" className='text-[14px]'>Your email address*</label>
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
            <div className='flex flex-col '>
              <label htmlFor="password" className='text-[14px]'>Password*</label>
              <input
                type="password"
                id="password"
                name="password"
                value={userpassword}
                className='h-[36px] rounded-lg mt-[4px]  outline-none border border-solid border-[#646468]'
                onChange={(e) => {
                  setUserpassword(e.target.value);
                  const hasUpperCase = /[A-Z]/.test(e.target.value);
                  const hasLowerCase = /[a-z]/.test(e.target.value);
                  const hasLength = e.target.value.length >= 8;
                  setPasswordError(
                    hasUpperCase && hasLowerCase && hasLength ? '' : 'Password must have at least one uppercase, one lowercase, and be at least 8 characters long'
                  );
                }}
                required
              />
              {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
            </div>
            <div className='flex flex-col '>
              <label htmlFor="confirmPassword" className='text-[14px]'>Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                className='h-[36px] rounded-lg mt-[4px]  outline-none border border-solid border-[#646468]'
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setConfirmPasswordError(e.target.value === userpassword ? '' : 'Passwords do not match');
                }}
                required
              />
              {confirmPasswordError && <p style={{ color: 'red' }}>{confirmPasswordError}</p>}
            </div>
            <div className='flex mt-[8px]'>
              <input
                type="checkbox"
                id="agreed"
                name="agreed"
                checked={agreed}
                className='mt-[4px] border-[#0100BB]'
                onChange={(e) => setAgreed(e.target.checked)}
                required
              />
              <label htmlFor="agreed" className='ml-[8px] text-sm'>
                By creating an account, you agree to the 
                <span className='text-[#0100BB]'><a href='#'> Terms of use </a></span> 
                and 
                <span className='text-[#0100BB]'><a href='#'> Privacy policy.</a></span>  
              </label>
            </div>
          </div>
          <div className='mt-[16px] h-[132px] flex flex-col items-center  justify-between'>
          <button id="signupButton" className='w-48 lg:w-full h-[36px] active:bg-rose-500 text-white rounded-full bg-[#0100BB] text-center' type="submit">
                  {isLoading ? (
                    <p>  Processing... <span className="icon-[svg-spinners--tadpole] ml-[0.5rem] text-white "></span>{/* Add your SVG animation here */}
                    </p>
                    ):( 'Sign Up'
                    )}
                </button>
               
            <p>
              Already have an account? 
              <span className='text-[#0100BB] active:text-rose-500'>
                <a href='/login'> Log in</a>
              </span>  
            </p>
            <div className=' flex items-center justify-between'>
              <hr  className='border border-[#94A3B8] w-16 lg:w-52'/>
              <p className='text-[#94A3B8] text-[14px]'>Or</p>
              <hr  className='border border-[#94A3B8] w-16 lg:w-52'/>
            </div>
            <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={handleGoogleLoginError} />
          </div>
        </form>
        {registrationMessage && <p>{registrationMessage}</p>}
      </div>
      {/* <div className=''>
        <img src={SignupImg} alt='Towel stacked together' className='h-48 w-full hidden lg:block object-cover rounded-r-xl md:h-[600px] md:w-full ' />
      </div> */}
    </div>
     )}
   </div>
  );
};

export default SignUp;