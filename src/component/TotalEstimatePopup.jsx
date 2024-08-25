import React from 'react';

const TotalEstimatePopup = ({ totalEstimate, onClose }) => {
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
   <div className="absolute inset-0 z-0 bg-[#000000] opacity-50"></div>
      <div className="bg-awhite z-10 rounded-lg p-8 max-w-md shadow-lg"> {/* Added shadow-lg class */}
        <h2 className="text-3xl font-bold mb-4">Total Estimate</h2>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg">Total:</span>
          <span className="text-lg font-bold">{totalEstimate}</span>
        </div>
        <button onClick={onClose} className="bg-[#0100BB] text-awhite px-8 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Close</button>
      </div>
    </div>
  );
};

export default TotalEstimatePopup;
