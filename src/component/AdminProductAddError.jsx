// ErrorPage.js
import React, { useState }from 'react';

const AdminProductAddError= () => {
  const [isLoading, setIsLoading] = useState(false); // State variable for loading state
  
    const handleRefresh = () => {
      window.location.reload();
      setIsLoading(true);
    };

  return (
    <div className="">
     <div className='items-center gap-y-[2rem] shadow-xl justify-center pt-[2rem] pb-[5rem] bg-awhite w-[22rem] rounded-[1rem] flex flex-col'>
        
        <h2 className='text-customColor2 font-semibold text-[1.6rem]'>Error!</h2>
        
      
        <p className='text-center text-[1.1rem]'>
            Failed to add product <br />Please try again
        </p>
        
        <button id="signupButton" onClick={handleRefresh}  className='w-[9rem] h-[36px] active:bg-rose-700 text-awhite rounded-[0.5rem] bg-customColor2 text-center' type="submit">
                  {isLoading ? (
                    <p>  Processing... <span class="icon-[svg-spinners--tadpole] ml-[0.5rem] text-awhite "></span>{/* Add your SVG animation here */}
                    </p>
                    ):( 'Try again'
                    )}
                </button>
         </div>
    </div>
  );
};

export default AdminProductAddError;