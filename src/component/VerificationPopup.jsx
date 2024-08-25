import React from 'react';
import { motion } from 'framer-motion';

const VerificationPopup = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div> {/* Background overlay with blur */}
      <div className="bg-white w-96 p-8 rounded-lg z-10 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">SignUp Successful</h2>
        <div className='' >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ stroke: '#2ecc71', fill: 'none' }}
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
          
        </div>
        <p className="text-lg text-center">To complete the sign-up process, please check your email for the verification link. Once verified, you'll be ready to log in!</p>
      </div>
    </div>
  );
};

export default VerificationPopup;
