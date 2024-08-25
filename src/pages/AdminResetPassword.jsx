import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AdminPasswordPageResetError from '../component/AdminPasswordPageResetError';
import AdminPasswordPageResetSucess from '../component/AdminPasswordPageResetSucess';


const AdminResetPassword =() => {
  const { email,otp } = useParams();
  const [userpassword, setUserpassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetError, setResetError] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State variable for loading state

  useEffect(() => {
    console.log('Email:', email);
    console.log('OTP:', otp)
  }, [email, otp]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    console.log('Button clicked')
     setIsLoading(true);
    try {
      // Assuming you have an API endpoint for resetting the password
      const response = await axios.post('https://rapidclean-laundry.onrender.com/api/user/resetPasssword', {
        email,
        otp,
        userpassword
      });
      
      // Assuming the backend responds with success message
      alert('Password reset successful')
      setResetSuccess(true);
    } catch (error) {
      console.error('Error resetting password:', error);
      setResetError(true);
    }
  };

  return (
    
    <div className='bg-[#EBEBEB] max-w-screen-2xl mx-auto p-4 flex justify-center items-center min-h-screen'>
     {resetSuccess ? (
         <AdminPasswordPageResetSucess />
        ) : resetError ? (
          <AdminPasswordPageResetSucess />
        ) : (
    <div className='flex items-center'>
      <div className='bg-white w-60 md:w-96 lg:w-[577px] rounded-lg flex flex-col justify-center p-6'>
        <div className='text-center'>
          <h2 className='text-2xl lg:text-4xl font-semibold'>Reset Password</h2>
          <h3 className='text-xs lg:text-2xl font-[500] text-[#646468] mt-2'>{email} Please enter a new password.</h3>
        </div>
      
          <form onSubmit={handleResetPassword} className='w-[465] mt-14'>
            <div className=' flex flex-col justify-between'>
                <div className='flex flex-col '>
                    <label htmlFor="password" className='text-[14px]'>New Password*</label>
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
                    <label htmlFor="confirmPassword" className='text-[14px]'>Confirm New Password</label>
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
                {resetError && <p style={{ color: 'red' }}>{resetError}</p>} 
            </div>
            <div className='mt-6 flex flex-col items-center  justify-between'>
            
              <button id="signupButton" className='w-48 lg:w-full h-[36px] active:bg-rose-500 text-white rounded-full bg-[#0100BB] text-center' type="submit">
                  {isLoading ? (
                    <p>  Processing... <span class="icon-[svg-spinners--tadpole] ml-[0.5rem] text-white "></span>{/* Add your SVG animation here */}
                    </p>
                    ):( 'Reset Password'
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

export default AdminResetPassword;
