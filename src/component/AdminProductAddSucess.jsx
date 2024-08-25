// ErrorPage.js
import React, { useState }from 'react';
import { Link } from "react-router-dom"

const AdminProductAddSucess= () => {
  const [isLoading, setIsLoading] = useState(false); // State variable for loading state
  
  

  return (
    <div className="">
     <div className='items-center shadow-xl gap-y-[2rem] justify-center pt-[2rem] pb-[3rem] bg-awhite w-[22rem] rounded-[1rem] flex flex-col'>
     <h2 className='text-adarkgreen font-semibold text-[1.6rem]'>Success!</h2>
  

        <p className='text-center text-[1.1rem]'>
            You have successfully added a  <br /> new product!
        </p>
        
      
        <Link to="/admin-dashboard/*" id="signupButton" className='w-[9rem] py-[0.5rem] text-awhite rounded-[0.3rem] bg-adarkgreen text-center' type="submit">Continue</Link>
                
               
         </div>
    </div>
  );
};

export default AdminProductAddSucess;