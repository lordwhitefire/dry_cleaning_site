// ErrorPage.js
import React from 'react';

const ErrorPage = () => {
  return (
    <div class="">
     <div className='items-center gap-y-[2rem] justify-center pt-[2rem] pb-[5rem] bg-white w-[17rem] rounded-[1rem] flex flex-col'>
        <div class="w-[5rem] flex justify-center items-center h-[5rem] border-[0.2rem] border-red-700 rounded-full">
     <span class="icon-[quill--warning] text-customColor2 w-[2.5rem] h-[2.5rem] "></span>
        
        </div>
        <p className='text-center'>
            Your email or password entered, <br />is incorrect please try again
        </p>
        <button id="signupButton" className='w-[9rem] h-[2rem] text-white rounded-[0.5rem] bg-customColor2 text-center' type="submit">Sign Up</button>
         </div>
    </div>
  );
};

export default ErrorPage;
