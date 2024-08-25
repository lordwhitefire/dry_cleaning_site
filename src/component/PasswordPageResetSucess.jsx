// ErrorPage.js
import React, { useState }from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom"

const PasswordPageResetSucess= () => {
  const [isLoading, setIsLoading] = useState(false); // State variable for loading state
  
  

  return (
    <div className="">
     <div className='items-center gap-y-[2rem] justify-center pt-[2rem] pb-[5rem] bg-awhite w-[17rem] rounded-[1rem] flex flex-col'>
     { /* Animated svg */}
        <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ stroke: '#28a745', fill: 'none' }}
        // animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <circle cx="12" cy="12" r="10" />
        </motion.g>
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.path
            d="M7 13l3 3 7-7"
            strokeDasharray="24"
            strokeDashoffset="24"
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, repeat: 1, ease: 'linear' }} 
          />
        </motion.g>
      </motion.svg>
        

        <p className='text-center'>
            Congratulations you have, <br />successfully reset your <br />password!
        </p>
        
      
        <Link to="/" id="signupButton" className='w-[9rem] py-[0.5rem] text-awhite rounded-[0.3rem] bg-adarkgreen text-center' type="submit">Continue</Link>
                
               
         </div>
    </div>
  );
};

export default PasswordPageResetSucess;