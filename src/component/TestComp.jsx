import React from 'react';
// import { motion } from 'framer-motion';

const TestComp = ({bg, btnText, textColor}) => {
  return (

      <button className={`bg-${bg} py-4 px-7 text-${textColor}`}>{btnText}</button>

  );
};

export default TestComp;
