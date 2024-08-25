// ErrorPage.js
import React, { useState }from 'react';

const ErrorLoginPage = () => {
  const [isLoading, setIsLoading] = useState(false); // State variable for loading state
  
    const handleRefresh = () => {
      window.location.reload();
      setIsLoading(true);
    };

  return (
    <div className="">
     <div className='items-center gap-y-[2rem] justify-center pt-[2rem] pb-[5rem] bg-awhite w-[17rem] rounded-[1rem] flex flex-col'>
        <div className="w-[5rem] flex justify-center items-center h-[5rem] border-[0.2rem] border-customColor2 rounded-full">
     <span className="icon-[quill--warning] text-customColor2 w-[2.5rem] h-[2.5rem] "></span>
        
        </div>
        <p className='text-center'>
            Your email or password entered, <br />is incorrect please try again
        </p>
        
        <button id="signupButton" onClick={handleRefresh}  className='w-[9rem] h-[36px] active:bg-rose-700 text-awhite rounded-[0.5rem] bg-customColor2 text-center' type="submit">
                  {isLoading ? (
                    <p>  Processing... <span class="icon-[svg-spinners--tadpole] ml-[0.5rem] text-white "></span>{/* Add your SVG animation here */}
                    </p>
                    ):( 'Try again'
                    )}
                </button>
         </div>
    </div>
  );
};

export default ErrorLoginPage;